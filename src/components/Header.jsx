import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    return (
      <header><h1>Movie Cards Library</h1></header>
    );
  }
}

export default Header;

Header.propTypes = {
  header: PropTypes.string,
}.isRequired;
