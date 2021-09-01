// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, imagePath } } = this.props;
    return (
      <main className="MovieCard">
        <section>
          <img className="ImagesCard" src={ imagePath } alt={ title } />
        </section>
        <section>
          <h4 className="movie-card-title">{ title }</h4>
        </section>
      </main>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
