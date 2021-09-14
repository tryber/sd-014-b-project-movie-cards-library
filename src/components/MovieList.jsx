import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
import ButtonWatch from './ButtonWatch';

class MovieList extends React.Component {
  render() {
    return (
      <div className= "Movie-list">
    {MovieList.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
        );
    }
}

MovieList.PropTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        storyline: PropTypes.string,
        rating: PropTypes.number,
        imagepath: PropTypes.string,
        link: PropTypes.string,
    }))
};

MovieList.defaultProps = {
    movies: [],
};

export default MovieList;
