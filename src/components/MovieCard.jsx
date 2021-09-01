// implement MovieCard component here
import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { movies } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movies;

    return (
      <section>
        <img src={ imagePath } alt={ `Imagem filme ${title}` } />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <p>{rating}</p>
      </section>
    );
  }
}

export default MovieCard;
