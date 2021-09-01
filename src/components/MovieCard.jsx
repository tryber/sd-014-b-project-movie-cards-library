import React from 'react';

class MovieCard extends React.Component {
  render() {
    const {title, subtitle, storyline, rating, imagePath,} = this.props.movie;
    return (<p>{title}</p>);
  }
}

export default MovieCard;
