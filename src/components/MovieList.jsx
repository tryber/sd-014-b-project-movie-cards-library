import React from 'react';
// import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

// const arrayofMovies = ['x', 'c', 'v', 'x']; // ????

// movies.map((movie) => <MovieCard />)

class MovieList extends React.Component {
  render() {
  const { movies } = this.props.movies;

    return (
      <main>
        <MovieCard />  
        <MovieCard />
        <MovieCard />
      </main>
    );
  }
}

MovieList.propTypes = {

};

export default MovieList;
