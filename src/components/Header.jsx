// implement Header component here
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <h1 className="bg-success p-4 mb-4 text-white text-center">
          Movie Cards Library
        </h1>
      </header>
    );
  }
}

export default Header;
