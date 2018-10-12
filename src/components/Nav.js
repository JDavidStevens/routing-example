import React, { Component } from 'react';
// Without the withRouter package, this component can't have access to the props provided by react-router since it isn't rendered by a route. i.e props.history, props.match.params, etc.
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

// Export withRouter with your component as an argument, and you will have access to all of the react-router goodness.
export default withRouter(Nav);
