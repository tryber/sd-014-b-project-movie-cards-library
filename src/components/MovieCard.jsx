// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <section>
        <img src={ imagePath } alt={ `Imagem do filme ${title}` } />
        <h4>{ title }</h4>
        <h3>{ subtitle }</h3>
        <p>{ storyline }</p>
        <p>{ rating }</p>
      </section>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.arrayOf.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  imagePath: PropTypes.string.isRequired,
};
export default MovieCard;
