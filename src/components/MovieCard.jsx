// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title } = this.props.card;
    return (
      <header>
        <h1>{ title }</h1>
      </header>
    );
  }
}

export default MovieCard;
