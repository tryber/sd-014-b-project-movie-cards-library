import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <main className="movie-list">
        { movies.map((card) => <MovieCard key={ card.title } movie={ card } />) }
      </main>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieList;
