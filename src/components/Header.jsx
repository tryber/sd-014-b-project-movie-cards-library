import React from 'react';
// import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    return (
      <header className="movie-card-header">
        <h1 className="page-title">Movie Cards Library</h1>
      </header>
    );
  }
}

// Header.propTypes = {
//   text: PropTypes.shape({
//     text: PropTypes.string,
//   }).isRequired,
// };

export default Header;
