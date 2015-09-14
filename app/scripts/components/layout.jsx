import React from 'react';
import Router from 'react-router';

class Layout extends React.Component {
  render() {
    return (
      <div className="App">
        <Router.RouteHandler />
      </div>
    );
  }
}

export default Layout;
