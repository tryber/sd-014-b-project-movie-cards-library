import React from 'react';
import MovieCard from './MovieCard';
import data from '../data';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section className="MovieList">
        { movies.map((obj) => <MovieCard key={ obj.title } movie={ obj } />) }
      </section>
    );
  }
}

export default MovieList;
