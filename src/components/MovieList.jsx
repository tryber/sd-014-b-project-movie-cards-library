import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MoviesList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <main>
        { movies.map((filme) => (
          <MovieCard key={ filme.title } movie={ filme } />
        ))}
      </main>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      imagePath: PropTypes.string.isRequiredq,
    }),
  ).isRequired,
};

export default MoviesList;
