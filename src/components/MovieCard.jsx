/* eslint-disable react/prop-types */
import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title,
      subtitle,
      storyline,
      imagePath,
      rating,
    } = this.props;
    return (
      <section className="movie-card">
        <section>
          <img src={ imagePath } alt={ title } />
          <h4>{ title }</h4>
          <h5>{ subtitle }</h5>
          <p>{ storyline }</p>
        </section>
        <Rating rating={ rating } />
      </section>
    );
  }
}

export default MovieCard;
