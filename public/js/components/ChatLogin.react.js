var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var ChatApp = require('./ChatApp.react.js');
var Modal = ReactBootstrap.Modal;
var Input = ReactBootstrap.Input;
var Button = ReactBootstrap.Button;

var ChatLogin = React.createClass({
  getInitialState: function(){
    return {
      userName: null
    };
  },
  handleChange: function(event){
    this.setState({userName: event.target.value});
  },
  setUserName: function(){
    this.props.setUserName(this.state.userName);
  },
  render: function(){
    return (
        <div className='static-modal'>
          <Modal title='Please input your Name'
                 bsStyle='primary'
                 onRequestHide={function(){}}
          >
            <div className='modal-body'>
              <Input type='text' onChange={this.handleChange}/>
            </div>
            <div className='modal-footer'>
              <Button bsStyle='primary' onClick={this.setUserName}>Submit</Button>
            </div>
          </Modal>
        </div>
    );
  }
});

module.exports = ChatLogin;
