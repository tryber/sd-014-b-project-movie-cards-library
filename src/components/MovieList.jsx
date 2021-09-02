import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section className="movie-list">
        {movies.map((card) => <MovieCard key={ card.title } movie={ card } />)}
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.element.isRequired,
};

export default MovieList;
