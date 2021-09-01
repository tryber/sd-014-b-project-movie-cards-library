import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
  render() {
    const a = 2;
    return (
      <header>
        <h1>Movie Cards Library</h1>
      </header>
    );
  }
}

Header.propTypes = {
  a: PropTypes.number,
}