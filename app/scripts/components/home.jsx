import React from 'react';
import GameList from './gamelist/gamelist';
import CreateGame from './createGame/createGame';
import Paper from 'material-ui/lib/paper';
import UserName from './userName/userName';
import BackendUrl from './backendUrl/backendUrl';

class Home extends React.Component {render() {
    return (
      <Paper className="hero-unit" zDepth={1}>

        <h1>RPS</h1>
        <BackendUrl />
        <UserName />
        <br/>
        <CreateGame/>
        <p>Games</p>
        <GameList/>
      </Paper>
    );
  }
}

export default Home;
