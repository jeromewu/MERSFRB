var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var restify = require('express-restify-mongoose');
var path = require('path');
var cookieParser = require('cookie-parser');
var MongoOplog = require('mongo-oplog');
var io = require('socket.io');
var debug = require('debug')('server:http');
var http = require('http');
var cors = require('cors');

var config = require('./config');
var mongooseInstantiator = require('./mongoose-instantiator');
var app_route = require('./routes/chatapp');

var Schema = mongoose.Schema;
var collection_watch_list = config.collection_watch_list;
var app = express();
var router = express.Router();
var mongoose_models;
var server;
var oplogs = [];

mongoose.connect(config.mongodb_uri);
mongoose_models = mongooseInstantiator(mongoose, config);
for(var i=0;i<mongoose_models.length;i++){
  restify.serve(router, mongoose_models[i]);
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('port', config.port);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use(router);
app.use('/chatapp',app_route);

server = http.createServer(app);
io = io.listen(server);

io.on('connection', function(socket){
  debug('User connected. Socket id %s', socket.id);
  socket.on('disconnect', function(){
    debug('User disconnected. Socket id %s', socket.id);
  });
});

for(var i=0;i<collection_watch_list.length;i++){
  oplogs[collection_watch_list[i]] = MongoOplog(config.mongodb_local_uri, collection_watch_list[i]).tail();
  oplogs[collection_watch_list[i]].on('insert', function(doc){
    io.emit(this.ns, 'insert');
  });
}

server.listen(config.port);
server.on('listening', onListening);

function onListening(){
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
