// implement Header component here
import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="movie-card-header">
        <h1 className="page-title">Movie Cards Library</h1>
        <img src="https://fontmeme.com/permalink/210901/aa8947aa394b045d19d5533840b31828.png" alt="netflix-font" />
      </header>
    );
  }
}

export default Header;
