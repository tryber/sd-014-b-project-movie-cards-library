import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const title = 'Movie Cards Library';
    return (
      <header>
        <h1>{title}</h1>
      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
