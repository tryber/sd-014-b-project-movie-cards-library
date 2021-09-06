// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movies } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movies;

    return (
      <section>
        <h4>{title}</h4>
        <h2>{subtitle}</h2>
        <h4>{storyline}</h4>
        <p>{rating}</p>
        <img src={ imagePath } alt={ title } />
      </section>
    );
  }
}

MovieCard.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired),
};

MovieCard.defaultProps = {
  movies: [],
};

export default MovieCard;
