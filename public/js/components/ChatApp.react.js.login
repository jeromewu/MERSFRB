var React = require('react/addons');
var ReactMixin = require('react-mixin');
var ReactBootstrap = require('react-bootstrap');
var Auth = require('../libs/AuthService');

module.exports = ChatApp = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function(){
    return {
      username: null,
      password: null
    };
  },
  componentWillMount: function(){
    ;
  },
  componentDidMount: function(){
    ;
  },
  componentWillReceiveProps: function(){
    ;
  },
  shouldComponentUpdate: function(){
    return true;
  },
  componentWillUpdate: function(){
    ;
  },
  componentDidUpdate: function(){
    ;
  },
  componentWillUnmount: function(){
    ;
  },
  login: function(e){
    e.preventDefault();
    Auth.login(this.state.username, this.state.password);
  },
  render: function(){
    return (
      <form role='form'>
        <div className='form-group'>
          <input type='text' valueLink={this.linkState('username')} placeholder='Username'/>
          <input type='password' valueLink={this.linkState('password')} placeholder='Password'/>
        </div>
        <button type='submit' onClick={this.login}>Submit</button>
      </form>
    );
  }

});
