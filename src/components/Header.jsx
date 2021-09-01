import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { frase } = this.props;
    return (
      <header>
        <p>{ frase }</p>
      </header>
    );
  }
}
Header.propTypes = {
  frase: PropTypes.string.isRequired,
};

export default Header;
