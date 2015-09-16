import React from 'react';
import Router from 'react-router';
import AppBar from 'material-ui/lib/app-bar';
import mui from 'material-ui';

let ThemeManager = mui.Styles.ThemeManager();

class Layout extends React.Component {
  // Important!
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    return (
      <div>
        <AppBar title="RPS"/>
        <div className="App">
          <Router.RouteHandler/>
        </div>
      </div>
    );
  }
}

// Important!
Layout.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default Layout;
