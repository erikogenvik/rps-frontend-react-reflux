import React from 'react';
import Game from '../game/game'
import Relay from 'react-relay';


class GameList extends React.Component {

  render() {
    const {viewer} = this.props;

    if (viewer) {
      return (
        <ul>
          {viewer.games.edges.map(edge => (
            <Game game={edge.node} key={edge.node.gameId}/>
          ))}
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
            gameId,
            ${Game.getFragment('game')}
          }
        }
      }
    }`,
  },
});

export default relayed;
