// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    // Desestruturação abaixo feita dessa forma por conta do lint
    // Estava - const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    const { movie: { title, subtitle, rating, storyline, imagePath } } = this.props;
    return (
      <section>
        <img src={ imagePath } alt={ `${title}` } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <Rating rating={ rating } />
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
