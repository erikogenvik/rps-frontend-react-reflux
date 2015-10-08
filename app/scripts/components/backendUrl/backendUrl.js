import React from 'react';
import BackendActions from '../../actions/backendActions'
import TextField from 'material-ui/lib/text-field'

class BackendUrl extends React.Component {

  render() {
    return (
      <TextField floatingLabelText="Backend url" ref="backendUrl" onBlur={event => BackendActions.setUrl(event.target.value)}/>
    );
  }
}

export default BackendUrl;
