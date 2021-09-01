// implement MovieCard component here
import React, { Component } from 'react';

export default class MovieCard extends Component {
  render() {
    const { movie: {
      title, subtitile, storyline, imagePath, rating
    } } = this.props
    return (
      <div>
        <img src={imagePath} alt={title} />
        <h4>{title}</h4>
      </div>
    );
  }
}
