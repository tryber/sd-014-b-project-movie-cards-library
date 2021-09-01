// implement Header component here
import React from 'react';
import Proptypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { headerText } = this.props;
    return (
      <header>{ headerText }</header>
    );
  }
}

Header.propTypes = {
  headerText: Proptypes.string.isRequired,
};

export default Header;
