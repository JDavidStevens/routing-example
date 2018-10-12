import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Nav extends Component {
  render() {
    const { pathname } = this.props.location;
    return (
      <nav className="navbar">
        <h1>Nav</h1>
        <h3>Hello, you are here: {pathname}</h3>
      </nav>
    );
  }
}

export default withRouter(Nav);
