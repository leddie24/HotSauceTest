var React = require('react');
var ReactDOM = require('react-dom');
var render = require('react-dom').render;
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory;
var Link = require('react-router').Link;

var App = require('./views/App');
var HotSauceDetails = require('./views/HotSauceDetails');
var Comments = require('./views/comments');
var CommentForm = require('./views/comment-form');
var TasksPanel = require('./views/TasksPanel');


const app = document.getElementById('app');

var sauceData = [];

function getAjaxData() {
   axios
  .get("../hotsauces.json")
  .then(function(result) {    
    console.log('test', result.data.list);
    sauceData = result.data.list
  });
}

// ReactDOM.render(<App />, document.getElementById('app'));
render((
  <Router history={hashHistory}>
    <Route path="/" data={sauceData} component={App}></Route>
    <Route path="details/:id" component={HotSauceDetails}></Route>
  </Router>
), app)


      // <Route path="about" component={About} />
      // <Route path="inbox" component={Inbox}>
      //   <Route path="messages/:id" component={Message} />
      // </Route>