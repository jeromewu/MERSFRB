var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var restify = require('express-restify-mongoose');
var path = require('path');
var cookieParser = require('cookie-parser');
var MongoOplog = require('mongo-oplog');
var io = require('socket.io');
var http = require('http');
var config = require('./config');

var mongooseInstantiator = require('./mongoose-instantiator');
var Schema = mongoose.Schema;
var app = express();
var app_route = require('./routes/chatapp');
var oplog = MongoOplog(config.mongodb_local_uri, config.db_watch).tail();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

mongoose.connect(config.mongodb_uri);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var mongoose_models = mongooseInstantiator(mongoose, config);

var router = express.Router();
for(var i=0;i<mongoose_models.length;i++){
  restify.serve(router, mongoose_models[i]);
}
app.use(router);
app.use('/chatapp',app_route);

var server = http.createServer(app);
io = io.listen(server);

io.on('connection', function(socket){
  console.log('User connected. Socket id %s', socket.id);
  socket.on('disconnect', function(){
    console.log('User disconnected. Socket id %s', socket.id);
  });
});


oplog.on('insert', function(doc){
  io.emit('update message', null);
});

server.listen(config.port, function(){
  console.log("Server listening on port " + config.port);
});
