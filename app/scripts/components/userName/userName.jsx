import React from 'react';
import UserActions from '../../actions/userActions'
import TextField from 'material-ui/lib/text-field'

class UserName extends React.Component {

  render() {
    return (
      <TextField floatingLabelText="User name" ref="userId" onChange={event => UserActions.setUserId(event.target.value)}/>
    );
  }
}

export default UserName;
