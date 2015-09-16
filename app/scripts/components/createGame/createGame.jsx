import React from 'react';
import GameActions from '../../actions/gameActions'

class CreateGame extends React.Component {
  _handleSubmit() {
    let userId = React.findDOMNode(this.refs.userId).value.trim();
    GameActions.createGame(userId);
    return false;
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
