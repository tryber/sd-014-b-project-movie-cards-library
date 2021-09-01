// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movies;
    return (
      <section className="movie-card">
        <img src={ imagePath } alt={ `Imagem do filme ${title}` } />
        <h4 className="movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
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
