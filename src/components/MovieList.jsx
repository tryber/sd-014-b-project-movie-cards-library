import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        <div>
          {movies.map((actualMovie) => (<MovieCard
            key={ movie.title }
            movie={ actualMovie }
          />))}
        </div>
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(propTypes.object).isRequired,
};
export default MovieList;
