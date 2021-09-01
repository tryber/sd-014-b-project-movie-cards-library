import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <header>
        <h1>{title}</h1>
      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: 'Movie Cards Library',
};

export default Header;
