var Reflux = require('reflux');
var ChatAppActions = require('../actions/ChatAppActions');

module.exports = Reflux.createStore({
  listenables: [ChatAppActions],
  receiveMessages: function(messages){
    this.trigger({messages});
  }
});
