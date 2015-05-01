var React = require('react');
var MessageStore = require('../stores/MessageStore');
var ReactBootstrap = require('react-bootstrap');
var ChatMessageBox = require('./ChatMessageBox.react');
var ChatInputBox = require('./ChatInputBox.react');
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

var ChatMain = React.createClass({
  render: function(){
    var messages = this.props.messages;
    var userName = this.props.userName;
    return (
        <Grid> 
          <Row className='show-grid'>
            <Col md={2}></Col>
            <Col md={8} style={{overflow: "auto", height: "480px"}}>
              <ChatMessageBox messages={messages} />
            </Col>
            <Col md={2}></Col>
          </Row>
          <Row className='show-grid' style={{position: 'fixed', bottom: '0'}}>
            <Col md={2}></Col>
            <Col md={8}>
              <ChatInputBox userName={userName}/>
            </Col>
            <Col md={2}></Col>
          </Row>
        </Grid>
    );
  }
});

module.exports = ChatMain;
