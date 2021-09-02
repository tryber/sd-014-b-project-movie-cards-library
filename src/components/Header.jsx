import React from 'react';

// Requisito 2 - Renderize um texto no <Header />
// O texto deverá estar dentro de uma tag h1, que por sua vez deve estar dentro de uma tag header
// O que será verificado:
// Renderize o texto "Movie Cards Library" dentro de <Header />.

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Movie Cards Library</h1>
      </header>
    );
  }
}

export default Header;
