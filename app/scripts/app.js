import Router from './router';
import GameActions from './actions/gameActions'

setInterval(() => GameActions.fetchList(), 5000);

Router.start();
