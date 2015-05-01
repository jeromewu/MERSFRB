var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Label = ReactBootstrap.Label;
        
var ChatMessage = React.createClass({
  render: function(){
    var message = this.props.message;
    return (
        <p>
          <Label>{message.name}</Label> : {message.message}
        </p>
    );
  }
});

module.exports = ChatMessage;
