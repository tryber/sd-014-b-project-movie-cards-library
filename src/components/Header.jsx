import React from 'react';

class Header extends React.Component {
  render() {
    const test = 'Movie Cards Library';
    return (
      <header>
        <h1>{ test }</h1>
      </header>
    );
  }
}

export default Header;
