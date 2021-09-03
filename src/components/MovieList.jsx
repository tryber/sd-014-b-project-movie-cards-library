// implement MovieList component here
import React, { Component } from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends Component {
  render() {
    const { movies } = this.props;

    return (
      <div>
        {movies.map((elementMovies)=> <MovieCard key={ elementMovies.title } movie={elementMovies} />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating:PropTypes.number,
      imagePath: PropTypes.string,
    })
  ).isRequired,
};

export default MovieList;
