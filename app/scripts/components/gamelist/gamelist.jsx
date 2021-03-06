import React from 'react';
import Reflux from 'reflux';
import GameStore from '../../stores/gameStore';
import Game from '../game/game'
import List from 'material-ui/lib/lists/list';


class GameList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gamestore: []
    };
  }

  componentDidMount() {
    this.unsubscribe = GameStore.listen(gamestore => this.setState({
      gamestore: gamestore
    }));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    if (this.state.gamestore && this.state.gamestore.length > 0) {
      return (
        <ul>
          {this.state.gamestore.map(game => (
            <Game game={game} key={game.gameId}/>
          ))}
        </ul>
      );
    } else {
      return (
        <div>No games yet</div>
      );
    }
  }
}

export default GameList;
