import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        <p>Movie list</p>
        <div className="MovieCard">
          {movies.map((movies) => <MovieCard key={ movies.title } movies={ movies } />)}
        </div>
      </div>
    );
  }
}

export default MovieList;
