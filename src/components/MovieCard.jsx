import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <div>
        <img src={ imagePath } alt={ title } />
      </div>
    );
  }
}

// MovieCard.propTypes = {
//   movies: PropTypes.arrayOf(PropTypes.object).isRequired,
//   title: PropTypes.string.isRequired,
//   subtitle: PropTypes.string.isRequired,
//   storyline: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired,
//   imagePath: PropTypes.string.isRequired,
// };

export default MovieCard;
