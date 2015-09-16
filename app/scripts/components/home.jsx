import React from 'react';
import GameList from './gamelist/gamelist';
import CreateGame from './createGame/createGame';

class Home extends React.Component {
  render() {
    return (
      <div className="hero-unit">
        <h1>RPS</h1>
        <p>Games</p>
        <GameList />
        <br />
        <CreateGame />
      </div>
    );
  }
}

export default Home;
