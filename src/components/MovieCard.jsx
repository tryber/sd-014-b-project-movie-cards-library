import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const {title, subtitle, storyline, rating, imagePath,} = this.props.movie;
    return (
      <section>
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <img src = { imagePath } alt = 'Imagem do jogo'/>
        <p>{ storyline }</p>
        <Rating rating = { rating } className = 'rating'/>
      </section>
      );
  }
}

export default MovieCard;
