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

  render() {
    let boundClick = () => {
      Relay.Store.update(new CreateGameMutation({userId: this.state.userId}));
      return false;
    }
    return (
      <button label="Create game" disabled={!this.state.userId} onClick={boundClick}>Create game</button>
    );
  }
}

export default CreateGame;
