import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
    return (
      <section className="card">
        <article className="movie-card">
          <img className="movie-image" src={ imagePath } alt={ title } />
          <h4 className="title">{title}</h4>
          <h5 className="subtilte">{subtitle}</h5>
          <p className="storyline">{storyline}</p>
          <Rating rating={ rating } />
        </article>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.string.isRequired,
};

export default MovieCard;
