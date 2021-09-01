import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movies: { title, subtitle, storyline, rating, imagePath }} = this.props;
    return `${title} `;
  }
}

export default MovieCard;
