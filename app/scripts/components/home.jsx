import React from 'react';
import GameList from './gamelist/gamelist';
import CreateGame from './createGame/createGame';
import UserName from './userName/userName';
import Relay from 'react-relay';

class Home extends React.Component {

  static propTypes = {
    viewer: React.PropTypes.object.isRequired
  };

  static queries = {
    viewer: (Component) => Relay.QL`query GamesQuery {
        viewer {
          ${Component.getFragment('viewer')}
        },
      }
    `,
  };

  render() {

    const {viewer} = this.props;

    return (
      <div>

        <h1>RPS</h1>
        <UserName />
        <br/>
        <CreateGame/>
        <p>Games</p>
        <GameList viewer={viewer}/>
      </div>
    );
  }
}

let relayed = Relay.createContainer(Home, {
  initialVariables: {
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        ${GameList.getFragment('viewer')}
      }
    `
  },
});

export default relayed;
