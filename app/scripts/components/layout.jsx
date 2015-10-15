import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import mui from 'material-ui';

//let ThemeManager = mui.Styles.ThemeManager();

class Layout extends React.Component {
  render() {
    return (
      <div>
        <div className="App">
          {this.props.children}
        </div>
      </div>
    );
  }
}


export default Layout;
