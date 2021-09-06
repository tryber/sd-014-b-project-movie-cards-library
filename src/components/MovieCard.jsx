// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { info } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = info;
    return (
      <section>
        <h1>{ title }</h1>
        <img src={ imagePath } alt={ title } />
        <h1>{ subtitle }</h1>
        <p>{ storyline }</p>
        <h1>{ rating }</h1>
      </section>
    );
  }
}

MovieCard.propTypes = {
  info: PropTypes.arrayOf.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};

export default MovieCard;
