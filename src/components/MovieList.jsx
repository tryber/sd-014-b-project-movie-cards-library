import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { filmes } = this.props;
    return (
      <main>
        { filmes.map((filme) => (
          <MovieCard key={ filme.title } subtitle={ filme.subtitle } />
        ))}
      </main>
    );
  }
}

MovieList.propTypes = {
  filmes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
    }),
  ).isRequired,
};

export default MovieList;
