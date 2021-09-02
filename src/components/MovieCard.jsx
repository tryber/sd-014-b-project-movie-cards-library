import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyLine, imagePath, rating } = this.props.movie;
    return (
      <div>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <img src={ imagePath } alt={ `Imagem do filme ${title}` } />
        <p>{storyLine}</p>
        <p>{rating}</p>
      </div>
    );
  }
}

export default MovieCard;
