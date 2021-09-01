import React from 'react';

class MovieCard extends React.Component {
  render() {
    const {title, subtitle, storyline, rating, imagePath,} = this.props.movies;
    return (<p>{title}</p>);
  }
}

export default MovieCard;
