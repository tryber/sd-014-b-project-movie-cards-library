import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

const mapAndRenderCards = (movies) => movies
  .map((movie) => <MovieCard movie={ movie } key={ movie.title } />);

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <main>
        { mapAndRenderCards(movies) }
      </main>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
    }),
  ).isRequired,
};

export default MovieList;
