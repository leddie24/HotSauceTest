// React dependencies
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

// Load components
import AppHome from "./views/AppHome";
import HotSauceList from "./views/HotSauceList";
import HotSauceDetails from "./views/HotSauceDetails";

// Define SPA container
const app = document.getElementById('app');

// Define react router paths
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={AppHome}>
      <IndexRoute component={HotSauceList} />
      <Route path="details/:id" component={HotSauceDetails}></Route>
    </Route>
  </Router>
), app);