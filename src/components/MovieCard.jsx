import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, imagePath, subtitle, storyline } } = this.props;
    return (
      <section>
        <h4>{title}</h4>
        <img src={ imagePath } alt="Capa do filme {title}" />
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating />
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    imagePath: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
