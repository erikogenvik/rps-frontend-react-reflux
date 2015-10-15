import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Layout from './components/layout';
import Home from './components/home';

let routes = (
  <Router>
  	<Route name="layout" path="/" component={Layout}>
  		<IndexRoute component={Home} />
  	</Route>
  </Router>
);

let start = function() {
	React.render(routes, document.getElementById('content'));
};

export default start;
