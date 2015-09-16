import React from 'react';
import ListItem from 'material-ui/lib/lists/list-item';

class Game extends React.Component {
  render() {
    return (
      <ListItem
      primaryText={'Created by : ' + this.props.game.createdBy}
      secondaryText={
        <p>
          <span style={{color: 'black'}}>Status</span><br/>
          {this.props.game.state}
        </p>
      }
      secondaryTextLines={2} />
    );
  }
}

export default Game;
