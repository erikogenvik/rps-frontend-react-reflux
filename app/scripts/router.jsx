import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';

import Layout from './components/layout';
import Home from './components/home';
import GameList from './components/gamelist/gamelist';


class HomeRoute extends Relay.Route {

  static routeName = 'Home';
  static queries = {
    viewer: (Component) => Relay.QL`query GamesQuery {
        viewer {
          ${Component.getFragment('viewer')}
        },
      }
    `,
  };
}


let start = () => {
	ReactDOM.render(
	  <Relay.RootContainer
	    Component={GameList}
	    route={new HomeRoute()}
	  />,
	  document.getElementById('content')
	);
};

export default start;
