// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props;
    return (
      <section>
        <img src={ imagePath } alt={ `Imagem do filme ${title}` } />
        <h4>{ title }</h4>
      </section>
    );
  }
}

export default MovieCard;
