import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
// feito analisando o código do Levi https://github.com/tryber/sd-014-b-project-movie-cards-library/tree/levi-manoel-movie-cards-library-project
class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
