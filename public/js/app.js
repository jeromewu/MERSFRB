var React = require('react');
var RestClient = require('./rest/RestClient');
var ChatApp = require('./components/ChatApp.react');
var ChatAppConstants = require('./constants/ChatAppConstants');
var ClientConstants = require('./constants/ClientConstants');
var socket = require('socket.io-client')(ClientConstants.serverURL);

socket.on('connect', function(){
  RestClient.getMessages();
})

socket.on('update message',function(){
  RestClient.getMessages();
})

React.render(
  <ChatApp />,
  document.getElementById('chat-app')
);
