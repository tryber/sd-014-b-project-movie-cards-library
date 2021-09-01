import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <header>
        <h1>{text}</h1>
      </header>
    );
  }
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
