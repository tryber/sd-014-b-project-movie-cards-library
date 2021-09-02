import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props;
    return (
      <section>
        <img src={ imagePath } alt={ `Imagem do filme ${title}` } />
        { title }
        { subtitle }
        { storyline }
        { rating }
      </section>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default MovieCard;
