import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section className="movie-list">
        { movies.map((obj) => <MovieCard key={ obj.title } movie={ obj } />) }
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf,
};

MovieList.defaultProps = {
  movies: 'Faltou o filme',
};

export default MovieList;
