// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props; // destructuring props assignment
    return (
      <main>
        { movies.map((movieAr) => <MovieCard key={ movieAr.title } movie={ movieAr } />) }
      </main>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  })).isRequired,
};

export default MovieList;
// dentro da funçao map (o que vai ser mapeado) o valor da propriedade movie
// do componente MovieCard seŕa o valor de entrada da funçao map (o objeto recebido lá no App.js),
// que é onde o data.js é importado. ou seja, o map cria uma uma lista de card usando a funçao
// do component MovieCard
// movieAr esta atrelado a propriedade 'movies'
// movieAr vai ser o valor para a entrada do data
