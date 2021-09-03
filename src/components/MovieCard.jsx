// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movieInfo } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movieInfo;
    return (title, subtitle, storyline, imagePath, rating);
  }
}

MovieCard.propTypes = {
  movieInfo: PropTypes.string.isRequired,
};

export default MovieCard;
