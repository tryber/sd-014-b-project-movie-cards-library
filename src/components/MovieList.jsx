import React from "react";
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>{ movies }</div>
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
