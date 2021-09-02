import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import MovieCards from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movieInfo } = this.props;
    return (
      <section>
        <MovieCards key={ movieInfo } movie={ movieInfo } />
      </section>
    );
  }
}

MovieList.propTypes = {
  movieInfo: PropTypes.string,
};

MovieList.defaultProps = {
  movieInfo: 'No value',
};

export default MovieList;
