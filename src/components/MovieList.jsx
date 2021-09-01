import React from "react";
import PropTypes from 'prop-types';
import MovieCard from "./MovieCard";
import movies from "../data";

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((filme) => <MovieCard key={ filme.title } />)}
      </div>
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
