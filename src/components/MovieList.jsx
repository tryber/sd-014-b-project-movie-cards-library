// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      { movies }
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.string.isRequired,
};

/* MovieList.defaultProps = {
  movies: [],
}; */

export default MovieList;
