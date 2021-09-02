import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section className="movie-list">
        {movies.map((filme) => (
          <MovieCard key={ filme.title } movie={ filme } />
        ))}
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.String,
      subtitle: PropTypes.String,
      storyline: PropTypes.String,
      imagePath: PropTypes.String,
      rating: PropTypes.Number,
    }),
  ).isRequired,
};

export default MovieList;
