import React from 'react';
import PropType from 'prop-types';

class MovieCards extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <section>
        <h4>{ title }</h4>
        <img src={ imagePath } alt={ title } />
        <h5>
          {subtitle}
        </h5>
        <p>
          {storyline}
        </p>
        <p>
          {rating}
        </p>

      </section>
    );
  }
}

MovieCards.propType = {
  movie: PropType.shape({
    title: PropType.string,
    subtitle: PropType.string,
    storyline: PropType.string,
    rating: PropType.number,
    imagePath: PropType.string,
  }).isRequired,
};

export default MovieCards;
