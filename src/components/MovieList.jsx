import React from 'react';
import PropTypes from 'prop-types';

// Requisito 4 - Renderize componentes <MovieCard /> dentro de <MovieList />
// <MovieList /> deve renderizar um componente <MovieCard /> para cada objeto contido no array recebido na prop movies.
// O que será verificado:
// Renderize componentes <MovieCard /> dentro de MovieList.

import MovieCard from './MovieCard';

// Requsito 3 - Crie um componente <MovieList />
// Crie um componente que represente toda a área com os cartões de filmes. <MovieList /> deve receber uma prop movies, que é um array de objetos com informações de um filme.
// O que será verificado:
// Renderize o componente <MovieList />

// Ref.: https://reactjs.org/docs/components-and-props.html

class MovieList extends React.Component {
  render() {
    const { movies } = this.props; // destructuring
    return (
      <div>
        <p>Movie list</p>
        <div className="movielist">
          { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
        </div>
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
// propType "movies" is not required, but has no corresponding defaultProps declaration.eslintreact/require-default-props
export default MovieList;
