import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      movie.map((movieObj) => (<MovieCard key={ movieObj.title } movie={ movieObj } />))
    );
  }
}

MovieList.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
