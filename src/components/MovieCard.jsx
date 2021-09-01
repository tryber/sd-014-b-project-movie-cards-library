// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <section className="movie-card">
        <img src={ imagePath } alt={ `Imagem do filme ${title}` } />
        <h1 className="movie-card-title">{ title }</h1>
        <p className="movie-card-subtitle">{ subtitle }</p>
        <p className="movie-card-storyline">{ storyline }</p>
        <section className="movie-card-rating">
          <p>Rating</p>
          <p className="rating">{ rating }</p>
        </section>
      </section>
    );
  }
}

export default MovieCard;
