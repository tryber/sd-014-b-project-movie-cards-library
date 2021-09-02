import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
import '../App.css';

class MovieCards extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <section>
        <img src={ imagePath } alt={ title } />
        <h4>{ title }</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={ rating } />
      </section>
    );
  }
}

MovieCards.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }),
};

MovieCards.defaultProps = {
  movie: PropTypes.shape({
    title: 'No name',
    subtitle: 'No subtitle',
    storyline: 'No storyline',
    rating: 0,
    imagePath: 'No image',
  }),
};

export default MovieCards;
