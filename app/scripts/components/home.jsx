import React from 'react';
import GameList from './gamelist/gamelist';

class Home extends React.Component {
  render() {
    return (
      <div className="hero-unit">
        <h1>RPS</h1>
        <p>Games</p>
        <GameList />
      </div>
    );
  }
}

export default Home;
