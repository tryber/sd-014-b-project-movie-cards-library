import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
    return (
      <section className="movie-card">
        <h4 className="movie-card-title">{title}</h4>
        <h5 className="movie-card-subtitle">{subtitle}</h5>
        <p className="movie-card-storyline">{storyline}</p>
        <img className="movie-card-image" src={ imagePath } alt="Imagem do Filme" />
        <Rating className="movie-card-rating" rating={ rating } />
      </section>
    );
  }
}

// ref: https://trybecourse.slack.com/archives/C023YHXAEGM/p1630524076409600

MovieCard.propTypes = {
  movie: PropTypes.shape.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieCard;
