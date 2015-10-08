import React from 'react';
import SelectField from 'material-ui/lib/select-field';

import GameActions from '../../actions/gameActions';
import UserStore from '../../stores/userStore';

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

    let Extra = null;
    if (this.props.game.state === 'created') {
      let isUser = this.state.userId;
      Extra = (<button disabled={!isUser} onClick={event => {GameActions.joinGame(this.props.game.gameId);}}>
          Join
        </button>
      );
    } else if (this.props.game.state === 'waiting' || this.props.game.state === 'ready') {
      let isUser = this.state.userId;
      if (this.state.userId === this.props.game.player1 || this.state.userId === this.props.game.player2) {
        Extra = (<select disabled={!isUser} onChange={event => {if (event.target.value) {GameActions.makeMove(this.props.game.gameId, event.target.value);}}}>
            <option>Make a move</option>
            <option value="rock">Rock</option>
            <option value="paper">Paper</option>
            <option value="scissor">Scissor</option>
          </select>);
      } else {
        Extra = (<span>You're not competing in this game.</span>);
      }
    } else if (this.props.game.state === 'won') {
      Extra = (
        <span>
          <strong>Winner:</strong>{this.props.game.winner}<br/>
          <strong>Loser:</strong>{this.props.game.loser}<br/>
        </span>
      );
    }


    // if (this.state.expanded) {
    //   Extra = (<p>
    //       <span style={{color: 'black'}}>Status: </span>
    //       {this.props.game.state}
    //       <br />
    //       <select onChange={event => {if (event.target.value) {GameActions.makeMove(this.props.game.gameId, event.target.value);}}}>
    //         <option>Make a move</option>
    //         <option value="rock">Rock</option>
    //         <option value="paper">Paper</option>
    //         <option value="scissor">Scissor</option>
    //       </select>
    //     </p>);
    // }
    return (
      <li onClick={() => this.setState({expanded: true})}>
        <p>{'Created by : ' + this.props.game.player1}</p>
        <p>
            <span style={{color: 'black'}}>Status: </span>{this.props.game.state}
        </p>
        {Extra}
      </li>
    );
  }
}

export default Game;
