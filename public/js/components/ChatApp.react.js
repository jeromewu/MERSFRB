var React = require('react');
var Reflux = require('reflux');
var ReactBootstrap = require('react-bootstrap');
var MessageStore = require('../stores/MessageStore');
var ChatLogin = require('./ChatLogin.react');
var ChatMain = require('./ChatMain.react');
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

module.exports = React.createClass({
  mixins: [Reflux.connect(MessageStore)],
  getInitialState: function(){
    return {
      messages: null,
      userName: null
    }
  },
  setUserName: function(name){
    this.setState({
      userName: name
    })
  },
  render: function(){
    if(this.state.userName == null){
      return <ChatLogin setUserName={this.setUserName}/>
    }
    else{
      return <ChatMain messages={this.state.messages} userName={this.state.userName}/>
    }
  }
});
