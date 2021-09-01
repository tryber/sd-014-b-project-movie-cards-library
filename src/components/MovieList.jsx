import React from 'react';
import MovieCard from './MovieCard';
import data from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        {data.map((card) => <MovieCard key={ card.title } movies={ card } />)}
      </div>
    );
  }
}

export default MovieList;
