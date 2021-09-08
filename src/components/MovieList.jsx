import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <main>
        {movies.map((movie, index) => <MovieCard key={ index } movie={ movie } />)}
      </main>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtittle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
    }),
  ).isRequired,
};

export default MovieList;
