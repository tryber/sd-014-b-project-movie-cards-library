import React from 'react';

class Header extends React.Component {
  render() {
    const headerText = 'Movie Cards Library';
    return (
      <header className="header">
        <h1 className="header-text">{ headerText }</h1>
      </header>
    );
  }
}

export default Header;
