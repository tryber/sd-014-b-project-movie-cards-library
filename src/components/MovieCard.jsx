// implement MovieCard component here
import React, { Component } from 'react';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    return (
      <div className="movie-card">
        <h4>{ this.props.movie.title }</h4>
        <h5>{ this.props.movie.subtitle }</h5>
        <p>{ this.props.movie.storyline }</p>
        <img src={ this.props.movie.imagePath } alt="movieImg" />
        <Rating rating={ this.props.movie.rating } />
      </div>);
  }
}

export default MovieCard;
