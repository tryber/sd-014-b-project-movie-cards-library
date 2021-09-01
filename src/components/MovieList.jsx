import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <main>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </main>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      ubtitle: PropTypes.string,
      storyline: PropTypes.string,
      imagePath: PropTypes.string,
      rating: PropTypes.number,
    }),
  ).isRequired,
};

export default MovieList;
