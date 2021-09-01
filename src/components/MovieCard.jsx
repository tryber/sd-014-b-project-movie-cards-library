import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movies;

    return (
      <section>
        <p>
          Título:
          { title }
        </p>
        <p>
          Subtítulo:
          { subtitle }
        </p>
        <p>
          Resenha:
          { storyline }
        </p>
        <p>
          Avaliação do Público:
          { rating }
        </p>
        <p>
          Poster do Filme:
          <img src={ imagePath } alt={ `Imagem do filme ${title}` } />
        </p>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
    }),
  ).isRequired,
};

export default MovieCard;
