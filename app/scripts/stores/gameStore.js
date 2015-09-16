import Reflux from 'reflux';
import $ from 'jquery';
import GameActions from '../actions/gameActions';

let GameStore = Reflux.createStore({
    listenables: [GameActions],
    gamelist: [],
    sourceUrl: 'http://localhost:8080/graphql',

    init: function() {
        this.fetchList();
    },

    fetchList: function() {
        $.ajax({
            url: this.sourceUrl,
            type: 'POST',
            processData: false,
            contentType: 'application/json',
            data: 'query Q {games{gameId, createdBy, loser, winner, state, moves{user, move}}',
            cache: false,
            context: this,
            success: data => {
                console.log('fetch complete');
                this.gamelist = data.games;
                this.trigger(this.gamelist);
            }
        });
    }
});

module.exports = GameStore;
