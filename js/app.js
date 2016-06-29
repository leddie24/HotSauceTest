// React dependencies
var hashHistory = require('react-router').hashHistory;
var IndexRoute = require('react-router').IndexRoute;
var React = require('react');
var ReactDOM = require('react-dom');
var render = require('react-dom').render;
var Route = require('react-router').Route;
var Router = require('react-router').Router;

// Components/Views
var AppHome = require('./views/AppHome');
var HotSauceList = require('./views/HotSauceList');
var HotSauceDetails = require('./views/HotSauceDetails');

const app = document.getElementById('app');

render((
  <Router history={hashHistory}>
    <Route path="/" component={AppHome}>
      <IndexRoute component={HotSauceList} />
      <Route path="details/:id" component={HotSauceDetails}></Route>
    </Route>
  </Router>
), app);