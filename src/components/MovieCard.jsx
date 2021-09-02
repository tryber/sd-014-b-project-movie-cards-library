import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const {
      movie: { title, subtitle, storyline, rating, imagePath },
    } = this.props;

    return (
      <section>
        <img src={ imagePath } alt={ title } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <Rating rating={ rating } />
      </section>
    );
  }
}

/**
 * Consultei o repositorio do colega Adilson
 * para tirar uma duvida de como utilizar o PropTypes
 * nessa parte de maneira correta (sem que eslint reclamasse)
 * Link: https://github.com/tryber/sd-014-b-project-movie-cards-library/blob/adilsongb-project-movie-cards-library/src/components/MovieCard.jsx
 */
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
