import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>

    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;

/*
Requisito 3: padrão importar o react e o proptype pra validar;
criamos a classe do componente
renderizamos
desestruturamos movies e atribuimos a props
retornamos um elemento pai
ja aproveitei pra validar o movies e fazer o lint parar de reclamar

Requisito 5:
importar o movieCard dentro do movieList
fazer o map para iterar
em cada iteração adiciona uma key com o nome e
passa a props movie para cada filme(movie)
*/
