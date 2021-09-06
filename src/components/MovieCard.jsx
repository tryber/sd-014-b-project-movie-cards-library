// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, imagePath, subtitle, storyline } = this.props.movies;
    return (
      <div>
        <img src={ imagePath } alt={ `filme ${title}` } />
        <h1>{ title }</h1>
        <p>{subtitle}</p>
        <p>{storyline}</p>
      </div>
    );
  }
}

export default MovieCard;
