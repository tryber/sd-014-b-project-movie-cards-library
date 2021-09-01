import React from 'react';

class MovieCard extends React.Component {
  render() {
    const {title, subtitle, storyline, rating, imagePath,} = this.props.movie;
    return (
      <section>
        <h4>{title}</h4>
        <img src = {imagePath}/>
      </section>
      );
  }
}

export default MovieCard;
