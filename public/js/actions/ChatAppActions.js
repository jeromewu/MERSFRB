var AppDispatcher = require('../dispatcher/AppDispatcher');
var ChatAppConstants = require('../constants/ChatAppConstants');

var ChatAppActions = {
  receiveMessages: function(data){
    AppDispatcher.handleAction({
      actionType: ChatAppConstants.RECEIVE_MESSAGE,
      data: data
    });
  }
}

module.exports = ChatAppActions;
