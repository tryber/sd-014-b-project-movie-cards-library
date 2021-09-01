import React from 'react';
import '../App.css';
import MovieCards from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const MovieLst = movies.map((movie, index) => (<MovieCards key={ index } movie={ movie } />));
    return (
      <section>
        { MovieLst }
      </section>
    );
  }
}

export default MovieList;
