import React from 'react';
//import Game from '../game/game'
import Relay from 'react-relay';


class GameList extends React.Component {

  render() {
    if (this.props.viewer) {
      return (
        <ul>
          {this.props.viewer.games.edges.map(edge => (<li>Game: {edge.node.gameId}</li>))}
        </ul>
      );
    } else {
      return (
        <div>No games yet</div>
      );
    }
  }
}

let relayed = Relay.createContainer(GameList, {
  initialVariables: {
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {games(first: 10) {
        edges {
          node {
            gameId
          }
        }
      }
    }`,
  },
});

export default relayed;
