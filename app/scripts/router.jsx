import React from 'react';
import Router from 'react-router';
let Route = Router.Route;
let DefaultRoute = Router.DefaultRoute;

import Layout from './components/layout';
import Home from './components/home';

let routes = (
	<Route name="layout" path="/" handler={Layout}>
		<DefaultRoute handler={Home} />
	</Route>
);

let start = function() {
	Router.run(routes, Handler => {
		React.render(<Handler />, document.getElementById('content'));
	});
};

export default start;
