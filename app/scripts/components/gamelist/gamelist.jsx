import React from 'react';
import Reflux from 'reflux';
import GameStore from '../../stores/gameStore';
import Game from '../game/game'

class GameList extends React.Component {
  onGameStoreChange(gamestore) {
    this.setState({
      gamestore: gamestore
    });
  }

  componentDidMount() {
    this.unsubscribe = GameStore.listen(this.onGameStoreChange);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <ul>
        {this.state.gamestore.map(game => (
          <li>{game.gameId}</li>
        ))}
        <li><Game/></li>
      </ul>
    );
  }
}

export default GameList;
