var React = require('react');

var TaskForm = require('./TaskForm');

var TaskStore = require('../stores/TaskStore');
var TasksToDo = require('./TasksToDo');


function getStateFromStore() {
   return {
      tasks: TaskStore.getAll()
   }
}

var TasksPanel = React.createClass({
   onChange: function() {
      this.setState(getStateFromStore());
   },
   getInitialState: function() {
      return getStateFromStore();
   },
   componentDidMount: function() {
      TaskStore.addChangeListener(this.onChange);
   },

   componentWillUnmount: function() {
      TaskStore.removeChangeListener(this.onChange);
   },
   render: function() {
      return (
         <div>
            <TaskForm />
            <TasksToDo tasks={this.state.tasks} />
         </div>
      );
   }

});

module.exports = TasksPanel;