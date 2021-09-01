// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movieObject: {
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
    },
    } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <p>{storyline}</p>
        <p>{rating}</p>
        <img src={imagePath} alt={`Cartaz de ${title}`} />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movieObject: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  })).isRequired,
};

export default MovieCard;
