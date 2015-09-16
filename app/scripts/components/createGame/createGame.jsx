import React from 'react';
import GameActions from '../../actions/gameActions'
import RaisedButton from 'material-ui/lib/raised-button'

class CreateGame extends React.Component {
  _handleSubmit() {
    GameActions.createGame(this.state.userId);
    return false;
  }

  render() {
    return (
      <RaisedButton label="Create game" onClick={() => GameActions.createGame()}/>
    );
  }
}

export default CreateGame;
