import React from 'react';
import Relay from 'react-relay';
import CreateGameMutation from '../../mutations/CreateGameMutation'
import UserStore from '../../stores/userStore'

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
    Relay.Store.update(new LikeStoryMutation({userId: this.state.userId}));
    return false;
  }

  render() {
    return (
      <button label="Create game" disabled={!this.state.userId} onClick={() => _handleSubmit()}>Create game</button>
    );
  }
}

export default CreateGame;
