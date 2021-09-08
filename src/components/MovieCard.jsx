// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
// import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
    return (
      <section className="movie-card">
        <div className="movie-card-body">
          <h4 className="movie-card-title">{ title }</h4>
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          <img src={ imagePath } alt="imagem do filme" className="movie-card-image" />
          <p className="movie-card-storyline">{ storyline }</p>
        </div>
        {/* <Rating className="movie-card-rating" rating={ rating } /> */}
      </section>
    );
  }
}

MovieCard.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      imagePath: PropTypes.string,
      storyline: PropTypes.string,
    //   rating: PropTypes.number
    }).isRequired),
  };

  export default MovieCard;
