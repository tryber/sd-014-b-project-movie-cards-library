import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return(
      <section>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <img src={ imagePath } alt={ title } />
        <Rating rating={ rating }/>
      </section>
    );
  }
}

export default MovieCard;
