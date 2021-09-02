import React from 'react';
// import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movieList } = this.props;
    return (
      <section>
        { movieList.map((filme, index) => <MovieCard key={ index } movie={ filme } />) }
      </section>
    );
  }
}

// MovieList.propTypes = {
//   movies: PropTypes.shape,
// };

export default MovieList;
