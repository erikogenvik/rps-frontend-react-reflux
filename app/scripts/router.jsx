import React from 'react';

import { Router, Route, Link } from 'react-router'
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import ReactRouterRelay from 'react-router-relay';

import Layout from './components/layout';
import Home from './components/home';
import GameList from './components/gamelist/gamelist';

const ViewerQueries = {
  viewer: () => Relay.QL`query { viewer }`
};

let start = () => {
  ReactDOM.render((
    <Router createElement={ReactRouterRelay.createElement}>
      <Route
        path="/" component={Home} queries={ViewerQueries}>
      </Route>
    </Router>
  ), document.getElementById('content'));
};

// let start = () => {
//   ReactDOM.render((
//     <Router createElement={ReactRouterRelay.createElement}>
//       <Route
//         path="/" component={Layout} >
//         <DefaultRoute component={Home}
//         />
//       </Route>
//     </Router>
//   ), document.getElementById('content'));
// };

export default start;
