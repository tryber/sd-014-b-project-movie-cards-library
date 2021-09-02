import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    return (
      <section>
        { this.props.movies.map((e) => <MovieCard movie={ e } key={ e.title } />)}
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
    }),
  ).isRequired,
};

export default MovieList;
