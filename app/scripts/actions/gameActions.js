import Reflux from 'reflux';

let GameActions = Reflux.createActions([
  'fetchList',
  'createGame',
  'joinGame',
  'makeMove'
]);

export default GameActions;
