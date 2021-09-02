import React from 'react';
import PropTypes from 'prop-types';

// O destructuring foi feito com ajuda do código do Israel Nazareth (https://github.com/tryber/sd-014-b-project-movie-cards-library/commit/98be82cbd63373feec1437df7d52d210267303d2)

// forma anterior: const { tittle, subtitle, storyline, rating, imagePath } = this.props.movie

// Essa desestruturação na camada mais profunda foi comentada no final da aula (Dúvida do slido do Fabrício), mas eu creio que seja uma exigência do lint, pois no exercício da pokédex foi feito da forma anterior, deu certo e os requisitos do projeto estavam passando.

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <div>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <img src={ imagePath } alt={ `Imagem do filme ${title}` } />
        <p>{storyline}</p>
        <h3>{rating}</h3>
      </div>
    );
  }
}

// PropTypes feito com auxílio do vídeo "React Basics - Understanding React PropTypes" (https://www.youtube.com/watch?v=XLthy2j_CCQ)

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      imagePath: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MovieCard;
