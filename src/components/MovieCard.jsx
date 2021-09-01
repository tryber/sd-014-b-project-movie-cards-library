// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, imagePath, subtitle, storyline } = this.props.movie;

    return (
      <div>
        <img src={ imagePath } alt={ `Foto do filme ${title}` } />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p> 
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    imagePath: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
