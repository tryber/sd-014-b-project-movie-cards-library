import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movies: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <div className="moviecard">
        <div>
          <p>{ title }</p>
          <p>{ subtitle }</p>
          <p>
            {`Sinopsis: ${storyline}`}
          </p>
          <p>{ rating }</p>
        </div>
        <img src={ imagePath } alt={ `Poster from the movie ${title}` } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
