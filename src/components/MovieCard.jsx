// implement MovieCard component here
import React from 'react';
import propTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    // Desestruturação abaixo feita dessa forma por conta do lint
    // Estava - const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <section>
        <img src={ imagePath } alt={ `${title}` } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
      </section>
    );
  }
}

MovieCard.propTypes = {
  title: propTypes.string,
  subtitle: propTypes.string,
  storyline: propTypes.string,
  imagePath: propTypes.string,
}

export default MovieCard;
