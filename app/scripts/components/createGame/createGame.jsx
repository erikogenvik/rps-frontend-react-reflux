import React from 'react';
import GameActions from '../../actions/gameActions'
import UserStore from '../../stores/userStore'
import RaisedButton from 'material-ui/lib/raised-button'

class CreateGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.unsubscribe = UserStore.listen(userId => this.setState({
      userId: userId
    }));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }


  _handleSubmit() {
    GameActions.createGame(this.state.userId);
    return false;
  }

  render() {
    return (
      <RaisedButton label="Create game" disabled={!this.state.userId} onClick={() => GameActions.createGame()}/>
    );
  }
}

export default CreateGame;
