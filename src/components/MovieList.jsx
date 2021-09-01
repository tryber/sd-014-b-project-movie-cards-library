// implement MovieList component here
import React from 'react';
// import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movies-list">
        {movies
          .map((movie, index) => {
            const chave = `Movie Title ${index + 1}`;
            return <MovieCard key={ chave } movie={ movie } />;
          }, [])}
      </div>
    );
  }
}

export default MovieList;
