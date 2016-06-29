var React = require('react');

var Task = require('./Task');

var TasksToDo = React.createClass({
   getInitialState: function() {
      return {
         tasks: this.props.tasks
      }
   },
   toggleComplete: function(task) {
      var newTasks = this.state.tasks;
      var idx = newTasks.indexOf(task);
      newTasks[idx].completed = !newTasks[idx].completed;
      this.setState({
         tasks: newTasks
      });
   },
   render: function() {
      var self = this;
      var tasks = this.state.tasks.map(function(task, idx) {
         return (
            <Task key={task.id}
                  task={task}
                  onClick={self.toggleComplete.bind(null, task)} />
         );
      });
      return (
         <div>
            <ul>
               {tasks}
            </ul>
         </div>
      );
   }
});

module.exports = TasksToDo;
