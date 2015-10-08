import Reflux from 'reflux';
import $ from 'jquery';
import GameActions from '../actions/gameActions';
import UserStore from './userStore';
import BackendStore from './backendStore';

let GameStore = Reflux.createStore({
  listenables: [GameActions],
  gamelist: null,
  sourceUrl: '',

  sendQuery: function(path, data, method) {
    method = method ? method : 'GET';

    return new Promise((resolve, reject) => {
      let request = {
        url: this.sourceUrl + path,
        type: method,
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: response => {
          resolve(response);
        }
      };
      $.ajax(request);
    })
  },

  init: function() {
    this.listenTo(UserStore, userId => this.userId = userId);
    this.listenTo(BackendStore, url => {
      this.sourceUrl = url;
      if (url) {
        this.fetchList();
      } else {
        this.gamelist = null;
        this.trigger(this.gamelist);
      }
    });
  },

  makeMove: function(gameId, move) {
    this.sendQuery(`games/${gameId}`, {email: this.userId, move: move}, 'POST')
    .then(data => {
      this.fetchList();
    });
  },

  createGame: function() {
    this.sendQuery(`games`, {email: this.userId}, 'POST')
    .then(data => {
      this.fetchList();
    });
  },

  joinGame: function(gameId) {
    this.sendQuery(`games/${gameId}`, {email: this.userId}, 'PUT')
    .then(data => {
      this.fetchList();
    });

  },

  fetchList: function() {
    this.sendQuery('games')
    .then(data => {
      this.gamelist = data;
      this.trigger(this.gamelist);
    });
  }
});

export default GameStore;
