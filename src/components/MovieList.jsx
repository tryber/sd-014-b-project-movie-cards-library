import React from 'react';
import PropTypes from 'prop-types';
import Moviecard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        { movies.map((unit) => <Moviecard key={ unit.title } movie={ unit } />) }
      </div>
    );
  }
}
MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imagePath: PropTypes.string,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
    }),
  ),
}.isRequired;

export default MovieList;
