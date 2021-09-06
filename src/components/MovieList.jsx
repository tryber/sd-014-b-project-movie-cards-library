import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const resultList = movies
      .map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
    return (
      <div>
        {resultList}
      </div>
    );
  }
}
MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MovieList;
