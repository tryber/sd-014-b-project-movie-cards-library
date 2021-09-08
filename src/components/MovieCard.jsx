import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    // correção na desestruturação feita com a ajuda do Pedro Pinheiro
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
    return (
      <section className="movie-card-body">
        <div className="movie-card">
          <img src={ imagePath } alt="" className="movie-card-image" />
          <h4 className="movie-card-title">{ title }</h4>
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          <p className="movie-card-storyline">{ storyline }</p>
          <Rating rating={ rating } />
        </div>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
