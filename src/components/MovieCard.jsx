import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props;
    return (
      <img src={ imagePath } alt={ `Imagem do filme ${title}` } />
    );
  }
}

export default MovieCard;
