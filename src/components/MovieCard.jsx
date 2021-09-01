// Passo 3
import React from 'react';
// Passo Final de testes
import propTypes from 'prop-types';
// Passo 13
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    // 3) Receber o movies como prop. Fazer fora do return!
    // Passo 6 (adicionar { title, subtitle, storyline, imagePath e rating })
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
    return (
    // Passo 6
      <div className="movie-card">
        <section className="movie-card-body">
          {/* Passo 7 */}
          <img src={ imagePath } alt="" className="movie-card-image" />
          {/* Passo 8 */}
          <h4 className="movie-card-title">{title}</h4>
          {/* Passo 9 */}
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          {/* Passo 10 */}
          <p className="movie-card-storyline">{storyline}</p>
          {/* Passo 13 e 14 */}
          <Rating rating={ rating } />
        </section>
      </div>
    );
  }
}

// Passo final: Testes de shape

MovieCard.propTypes = {
  movie: propTypes.shape({
    imagePath: propTypes.string,
    title: propTypes.string,
    subtitle: propTypes.string,
    storyline: propTypes.string,
    rating: propTypes.string,
  }).isRequired,
};

export default MovieCard;
