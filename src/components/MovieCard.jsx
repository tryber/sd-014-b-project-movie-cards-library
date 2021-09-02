// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movies: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <section>
        <img src={ imagePath } alt={ `Imagem do filme ${title}` } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <p>{ rating }</p>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movies: PropTypes.shape(
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
