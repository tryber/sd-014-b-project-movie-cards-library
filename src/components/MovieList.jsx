// implement MovieList component here
import React from 'react';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <h1>{ movies }</h1>
    );
  }
}

export default MovieList;
