import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props;
    return (
      <div>
        <img src={ imagePath } alt={ `Imagem do filme ${title}` } />
        <h4>{ title }</h4>
      </div>
    );
  }
}

export default MovieCard;
