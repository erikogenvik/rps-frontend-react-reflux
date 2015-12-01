import Relay from 'react-relay';

class CreateGameMutation extends Relay.Mutation {
  getMutation() {
    return Relay.QL`mutation {createGame}`;
  }
  getVariables() {
    return {userId: this.props.userId};
  }
  getFatQuery() {
    return Relay.QL`
      fragment on CreateGamePayload {
        game {
          gameId
        }
      }
    `;
  }
  getConfigs() {
    return [{
      type: 'FIELDS_CHANGE',
      fieldIDs: {
      },
    }];
  }
  static fragments = {
  };
}

export default CreateGameMutation;
