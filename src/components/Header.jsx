import React from 'react';

const text = 'Movie Cards Library';
class Header extends React.Component {
  render() {
    return (
      <header className="movie-card-header">
        <h1 className="page-title">
          { text }
        </h1>
      </header>
    );
  }
}

export default Header;
