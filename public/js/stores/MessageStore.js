var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var ChatAppConstants = require('../constants/ChatAppConstants');
var _ = require('underscore');


var messages;

var MessageStore = _.extend({}, EventEmitter.prototype, {
  getMessages: function(){
    return messages;
  },

  emitChange: function(){
    this.emit('change');
  },

  addChangeListener: function(callback){
    this.on('change', callback);
  },

  removeChangeListener: function(callback){
    this.removeListener('change', callback);
  }
});

AppDispatcher.register(function(payload){
  var action = payload.action;

  switch(action.actionType){
    case ChatAppConstants.RECEIVE_MESSAGE:
      messages = action.data;
      break;
    default:
      return true;
  }
  MessageStore.emitChange();
  return true;
});

module.exports = MessageStore;
