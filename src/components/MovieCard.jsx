// implement MovieCard component here
import React from 'react'; // JSX transform turns it into regular JavaScript:
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component { // component estilo class
  render() { // fator fundamental na construção de classe component
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props; // destructuring props assignment

    return (
      <section className="movie">
        <img alt={ { title } } src={ imagePath } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <Rating rating={ rating } />
      </section>
    );
  }
}

MovieCard.propTypes = { // definição dos proptypes
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.number,
  imagePath: PropTypes.string,
  rating: PropTypes.number,
}.isRequired;

export default MovieCard;
