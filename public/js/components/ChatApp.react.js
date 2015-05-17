var React = require('react');
var MessageStore = require('../stores/MessageStore');
var ReactBootstrap = require('react-bootstrap');
var ChatLogin = require('./ChatLogin.react');
var ChatMain = require('./ChatMain.react');
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

module.exports = React.createClass({
  getInitialState: function(){
    return {
      messages: MessageStore.getMessages(),
      userName: null
    }
  },

  componentDidMount: function(){
    MessageStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    MessageStore.removeChangeListener(this._onChange);
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
  },

  _onChange: function(){
    this.setState({
      messages: MessageStore.getMessages(),
    });
  }
});
