var React = require('react');
var ReactDOM = require('react-dom');

var TaskActions = require('../actions/TaskActions');

var TaskForm = React.createClass({
   onSubmit: function(e) {
      var textNode = ReactDOM.findDOMNode(this.refs.text);
      var text = textNode.value;

      textNode.value = '';

      TaskActions.createTask({
         text: text
      });
   },
   render: function() {
      return (
         <div className='comment-form'>
           <textarea ref='text' />
           <button onClick={this.onSubmit}>Submit</button>
         </div>
      );
   }
});

module.exports = TaskForm;
