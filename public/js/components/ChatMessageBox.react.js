var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var ChatAppActions = require('../actions/ChatAppActions');
var ChatMessage = require('./ChatMessage.react');
var Panel = ReactBootstrap.Panel;

var ChatMessageBox = React.createClass({
  render: function(){
    var messages = this.props.messages.map(function(message){
      return (
        <ChatMessage key={message._id} message={message} />    
      );
    });
    return (
      <div> 
        {messages}
      </div>
    );
  }
});

module.exports = ChatMessageBox;
