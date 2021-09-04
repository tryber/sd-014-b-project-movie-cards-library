import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <section
        title={ movie.title }
        subtitle={ movie.subtitle }
        storyline={ movie.storyline }
        imagePath={ movie.imagePath }
        rating={ movie.rating }
      />
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.string.isRequired,
};

export default MovieCard;
