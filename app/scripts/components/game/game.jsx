import React from 'react';
import Relay from 'react-relay';
import UserStore from '../../stores/userStore'

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {userId: null};
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
    let moves = [{id:'rock', name: 'Rock'}, {id: 'paper', name: 'Paper'}, {id:'scissor', name: 'Scissor'}];

    const {game} = this.props;


    let Extra = null;
    if (game.state === 'inProgress') {
      let isUser = this.state.userId;
      Extra = (<select disabled={!isUser} onChange={event => {if (event.target.value) {GameActions.makeMove(game.gameId, event.target.value);}}}>
        <option>Make a move</option>
        <option value="rock">Rock</option>
        <option value="paper">Paper</option>
        <option value="scissor">Scissor</option>
      </select>
    );
    } else if (game.state === 'won') {
      Extra = (
        <span>
          <strong>Winner:</strong>{game.winner}<br/>
          <strong>Loser:</strong>{game.loser}<br/>
        </span>
      );
    }


    // if (this.state.expanded) {
    //   Extra = (<p>
    //       <span style={{color: 'black'}}>Status: </span>
    //       {game.state}
    //       <br />
    //       <select onChange={event => {if (event.target.value) {GameActions.makeMove(game.gameId, event.target.value);}}}>
    //         <option>Make a move</option>
    //         <option value="rock">Rock</option>
    //         <option value="paper">Paper</option>
    //         <option value="scissor">Scissor</option>
    //       </select>
    //     </p>);
    // }
    return (
      <li onClick={() => this.setState({expanded: true})}>
        <p>{'Created by : ' + game.createdBy}</p>
        <p>
            <span style={{color: 'black'}}>Status: </span>{game.state}
        </p>
        {Extra}
      </li>
    );
  }
}


let relayed = Relay.createContainer(Game, {
  initialVariables: {
  },
  fragments: {
    game: () => Relay.QL`
      fragment on Game {
        gameId,
        state,
        winner,
        loser,
        createdBy
      }`,
  },
});

export default relayed;
