import Router from './router';
import Relay from 'react-relay';


Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('http://localhost:8080/relay')
);

Router();
