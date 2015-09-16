import React from 'react';
import GameActions from '../../actions/gameActions'

class CreateGame extends React.Component {
  _handleSubmit() {
    GameActions.createGame(this.refs.userId.value);
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit.bind(this)}>
        <h3>Create game</h3>
        User name: <input type="text" ref="userId" />
      </form>
    );
  }
}

export default CreateGame;
