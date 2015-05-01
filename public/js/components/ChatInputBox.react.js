var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Input = ReactBootstrap.Input;
var Button = ReactBootstrap.Button;
var Client = require('node-rest-client').Client;
var ClientConstants = require('../constants/ClientConstants');

var client = new Client();

var ChatInputBox = React.createClass({
  sendMessage: function(){
    var data = {
      name: this.props.userName,
      message: this.refs.message.getValue()
    };
    client.post(ClientConstants.restURL,{data:data, headers:{"Content-Type":"application/json"}}, function(data, res){
      ;
    });
  },
  render: function(){
    var userName = this.props.userName;
    return (
        <Input type='text' addonBefore={userName} buttonAfter={<Button onClick={this.sendMessage}>Send</Button>} ref='message'/>
    );
  }
});

module.exports = ChatInputBox;
