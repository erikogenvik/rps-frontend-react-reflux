import React from 'react';
import GameActions from '../../actions/gameActions'
import TextField from 'material-ui/lib/text-field'

class CreateGame extends React.Component {
  _handleSubmit() {
    GameActions.createGame(this.state.userId);
    return false;
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit.bind(this)}>
        <h3>Create game</h3>
        <TextField floatingLabelText="User name" ref="userId" onChange={event => this.setState({userId: event.target.value})}/>
      </form>
    );
  }
}

export default CreateGame;
