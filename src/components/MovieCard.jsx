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
  movie: PropTypes.arrayOf.isRequired,
};

export default MovieCard;
