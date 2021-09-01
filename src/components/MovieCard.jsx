// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { 
      movie: {title, subtitle, storyline, imagePath, rating} 
    } = this.props;

    return (
      <section>
        {movie}
      </section>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  imagePath: PropTypes.string,
  rating: PropTypes.number
}.isRequired;

export default MovieCard;
