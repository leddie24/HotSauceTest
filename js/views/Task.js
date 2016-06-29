var React = require('react');

var Task = React.createClass({
   toggleTask: function() {
      this.props.onClick();
   },
   render: function() {
      var taskStyle = {};
      if (this.props.task.completed) {
         taskStyle = {
            textDecoration: "line-through"
         };
      }
      return (
         <li onClick={this.toggleTask} style={taskStyle}>
            {this.props.task.text}
         </li>
      );
   }
});

window.Task = Task;

module.exports = Task;