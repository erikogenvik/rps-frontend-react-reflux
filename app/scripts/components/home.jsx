import React from 'react';
import GameList from './gamelist/gamelist';
import CreateGame from './createGame/createGame';
import Paper from 'material-ui/lib/paper';

class Home extends React.Component {render() {
    return (
      <Paper className="hero-unit" zDepth={1}>

        <h1>RPS</h1>
        <p>Games</p>
        <GameList/>
        <br/>
        <CreateGame/>
      </Paper>
    );
  }
}

export default Home;
