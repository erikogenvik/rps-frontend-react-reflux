import React from 'react';
import UserActions from '../../actions/userActions'

class UserName extends React.Component {

  render() {
    return (
      <span>User name
        <input type="text" onChange={event => UserActions.setUserId(event.target.value)} />
      </span>
    );
  }
}

export default UserName;
