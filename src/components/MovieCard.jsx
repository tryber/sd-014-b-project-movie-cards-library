import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, rating, storyline, imagePath } } = this.props;
    return (
      <section className="movie-card">
        <img className="movie-card-image" src={ imagePath } alt={ `${title}` } />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{ title }</h4>
          <h5 className="movie-card-subtitle ">{ subtitle }</h5>
          <p className="movie-card-storyline ">{ storyline }</p>
        </div>
        <section className="movie-card-rating">
          <Rating rating={ rating } />
        </section>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    rating: PropTypes.number,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
