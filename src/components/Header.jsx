import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <header className="movie-card-header">
        <h1 className="page-title">{title}</h1>
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
