import React from 'react';
import MovieCard from './MovieCard';
import data from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <section className="movie-list">
        {data.map((movieObj) => <MovieCard key={ movieObj.title } movie={ movieObj } />)}
      </section>
    );
  }
}

export default MovieList;
