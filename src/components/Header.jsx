import React from 'react';

class Header extends React.Component {
  render() {
    const texto = 'Movie Cards Library';

    return (
      <header>
        <h1>
          {texto}
        </h1>
      </header>
    );
  }
}

export default Header;
