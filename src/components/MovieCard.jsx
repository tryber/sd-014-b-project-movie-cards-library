import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const {
      movie: { title, subtitle, storyline, rating, imagePath },
    } = this.props;
    return (
      <section className="movie-card">
        <img src={ imagePath } alt="Capa do Filme" className="movie-card-image" />
        <div className="movie-card-body">          
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
          </div>          
        <Rating rating={ rating } />      
      </section>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.String,
  subtitle: PropTypes.String,
  storyline: PropTypes.String,
  magePath: PropTypes.String,
  rating: PropTypes.Number,
}.isRequired;

export default MovieCard;

// Referências:
// 1. Dúvida em relação a escrita dos propTypes sanada na thread do Slack do aluno Esdras Oliveira, onde ele mostrou seu código.
// 2. Tive ajuda do Rodolfo Braga e do Wellington Fonseca na correção da section para incluir corretamente as classes do css.