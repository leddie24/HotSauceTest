var AppDispatcher = require('../dispatcher/app-dispatcher');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var tasks = [];

var TaskStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  },

  getAll: function() {
    return tasks;
  }
});

AppDispatcher.register(function(action) {

  switch(action.actionType) {

    case "CREATE_TASK":
      var newTask = action.task;
      newTask.id = Date.now();
      newTask.completed = false;
      tasks.push(newTask);
      console.log('tasks', tasks);
      TaskStore.emitChange();
      break;
    default:
  }
});

module.exports = TaskStore;