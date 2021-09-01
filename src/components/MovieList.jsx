import React from 'react';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        { console.log(movies) }
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
*/
