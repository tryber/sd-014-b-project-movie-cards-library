// implement MovieCard component here
import React, { Component } from 'react'
class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;

    return (
      <div>
        <img src={ imagePath } alt={ title } />
        <h4> { title } </h4>
        <h5> { subtitle } </h5>
        <p> { storyline } </p>
      </div>
    );
  }
}

export default MovieCard;
