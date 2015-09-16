import React from 'react';
import Game from '../game/game'

class GameList extends React.Component {
  render() {
    return (
      <ul>
        <li><Game /></li>
      </ul>
    );
  }
}

export default GameList;
