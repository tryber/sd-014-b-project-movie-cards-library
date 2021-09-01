import React from 'react';
import MovieCard from './MovieCard';
import data from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        <div>
          {data.map((movie) => (<MovieCard key={ movie.title } movie={ movie } />))}
        </div>
      </div>
    );
  }
}

export default MovieList;
