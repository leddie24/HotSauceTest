var AppDispatcher = require('../dispatcher/app-dispatcher');

module.exports = {

  createTask: function(task) {
    var action = {
      actionType: "CREATE_TASK",
      id: Date.now(),
      task
    };

    AppDispatcher.dispatch(action);
  }

};