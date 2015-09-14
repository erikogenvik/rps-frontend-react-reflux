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

export function start() {
	Router.run(routes, Handler => {
		React.render(<Handler />, document.getElementById('content'));
	});
}
