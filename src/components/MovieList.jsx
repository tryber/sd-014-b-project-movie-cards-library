import PropTypes from 'prop-types';
import React from 'react';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <h1>{movies}</h1>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,

};

export default MovieList;
