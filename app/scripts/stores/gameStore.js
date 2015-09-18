import Reflux from 'reflux';
import $ from 'jquery';
import GameActions from '../actions/gameActions';
import UserStore from './userStore';

let GameStore = Reflux.createStore({
  listenables: [GameActions],
  gamelist: [],
  sourceUrl: 'http://localhost:8080/graphql',

  sendQuery: function(query) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: this.sourceUrl,
        type: 'POST',
        processData: false,
        contentType: 'application/json',
        data: query,
        cache: false,
        success: data => {
          resolve(data);
        }
      });
    })
  },

  init: function() {
    this.listenTo(UserStore, userId => this.userId = userId);
    this.fetchList();
  },

  makeMove: function(gameId, move) {
    this.sendQuery(`mutation M {makeMove(gameId: "${gameId}", move: "${move}", userId: "${this.userId}"){gameId, createdBy, loser, winner, state, moves{user, move}}}`)
    .then(data => {
      this.fetchList();
    });
  },

  createGame: function() {
    this.sendQuery(`mutation M {createGame(userId: "${this.userId}"){gameId, createdBy, loser, winner, state, moves{user, move}}}`)
    .then(data => {
      this.fetchList();
    });
  },

  fetchList: function() {
    this.sendQuery('query Q {games{gameId, createdBy, loser, winner, state, moves{user, move}}}')
    .then(data => {
      this.gamelist = data.games;
      this.trigger(this.gamelist);
    });
  }
});

export default GameStore;
