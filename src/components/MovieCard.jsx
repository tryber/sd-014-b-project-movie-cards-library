// implement MovieCard component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;

    return (
      <section>
        <img src={ imagePath } alt={ `Imagem filme ${title}` } />
        <h4 className="title-mov-card">{title}</h4>
        <h5 className="subtitle-mov-card">{subtitle}</h5>
        <p className="storyline-mov-card">{storyline}</p>
        <p>{rating}</p>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    toryline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }),
}.isRequired;

export default MovieCard;
