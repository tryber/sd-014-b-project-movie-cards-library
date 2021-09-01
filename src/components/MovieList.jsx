import React from 'react';
// import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

const mapAndRender = (arr) => arr.map((element) => <MovieCard movies={element} key={element.title} />)
class MovieList extends React.Component {
  render() {
  const { movies, title } = this.props;

    return (
      <main>
        {mapAndRender(movies)}
      </main>
    );
  }
}

MovieList.propTypes = {

};

export default MovieList;
