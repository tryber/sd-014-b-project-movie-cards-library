// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
    return (
      <div>
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <img src={ imagePath } alt="Imagem movie" />
        <h2>{ rating }</h2>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape(
    {
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
    },
  ).isRequired,
};

export default MovieCard;
