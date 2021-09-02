import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const arrMovies = movies;
    return (
      <main className="movie-list">
        { arrMovies
          .map((movie, index) => (<MovieCard
            key={ `Movie Title ${index + 1}` }
            movie={ movie }
          />))}
      </main>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.shape([]).isRequired,
};

export default MovieList;
