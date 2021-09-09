// implement MovieList component here
import React from 'react';
// import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;

    return (
      <section>
        { movies }
      </section>
    );
  }
}

export default MovieList;
