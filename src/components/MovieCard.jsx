import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    console.log(this.props);
    return (
      <section>
        <main>
          <img src={ imagePath } alt={ title } />
          <h4>{title}</h4>
          <p>{subtitle}</p>
          <p>{storyline}</p>
          <h2>{rating}</h2>
        </main>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.string.isRequired,
};

export default MovieCard;
