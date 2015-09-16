import React from 'react';
import SelectField from 'material-ui/lib/select-field';

import GameActions from '../../actions/gameActions'

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
    let moves = [{id:'rock', name: 'Rock'}, {id: 'paper', name: 'Paper'}, {id:'scissor', name: 'Scissor'}];

    let Extra = (<p>
        <span style={{color: 'black'}}>Status: </span>
        {this.props.game.state}
      </p>);

    if (this.state.expanded) {
      Extra = (<p>
          <span style={{color: 'black'}}>Status: </span>
          {this.props.game.state}
          <br />
          <select onChange={event => {if (event.target.value) {GameActions.makeMove(this.props.game.gameId, event.target.value);}}}>
            <option>Make a move</option>
            <option value="rock">Rock</option>
            <option value="paper">Paper</option>
            <option value="scissor">Scissor</option>
          </select>
        </p>);
    }
    return (
      <li onClick={() => this.setState({expanded: true})}>
        <p>{'Created by : ' + this.props.game.createdBy}</p>
        {Extra}
      </li>
    );
  }
}

export default Game;
