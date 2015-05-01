var Client = require('node-rest-client').Client;
var ClientConstants = require('../constants/ClientConstants');
var ChatAppActions = require('../actions/ChatAppActions');

var client = new Client();

module.exports = {
  getMessages: function(){
    client.get(ClientConstants.restURL, function(data, response){
        ChatAppActions.receiveMessages(JSON.parse(data));
    });
  }
}

