import React from 'react';

class CreateGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <button label="Create game" disabled={!this.state.userId}>Create game</button>
    );
  }
}

export default CreateGame;
