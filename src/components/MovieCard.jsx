import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <div className="card">
        <h2>{ title }</h2>
        <h3>{ subtitle }</h3>
        <p>{ storyline }</p>
        <p>{ rating }</p>
        <h4>{ imagePath }</h4>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;

/*
Requisito 4: renderizar o movie card dentro do movie list
importar react, proptype e o style.css
criar a classe movie card: 
aqui definimos como nosso elemento vai aparecer na tela
e com que ele vai aparecer
linha 7: descontruimos o obj movie lá do data.js e atribuimos a this.props <<< ATENÇÂO AQUI <<<
no retorno montamos como ele deve ser feito
div pai, titulo, subtitulo, storia, avaliação e imagem.
se quiser pode alterar a ordem também.
fecha a div e fazemos a validação da desestruturação com o 
proptypes
componente.propTypes recebe um obj por isso das {}
que recebe outro obj o movie, esse porém tem o formato(shape)
de acordo com a linha 22 até 27. assim validando a desestruturação.
e fazendo o lint parar de chorar
*/