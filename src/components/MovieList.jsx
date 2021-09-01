import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        <p>Movie list</p>
        <div className="MovieCard">
          {movies.map((movies) => <MovieCard key={ movies.id } movies={ movies } />)}
        </div>
      </div>
    );
  }
}

export default MovieList;
