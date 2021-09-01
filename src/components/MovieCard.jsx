import React, { Component } from 'react';
import movies from '../data';

export default class MovieCard extends Component {
  render() {
    const { movies: { title, subtitle, storyline, imagePath, rating } } = this.props;
    return (
      <div className='moviecard'>
        <p>{title}</p>
        <p>{subtitle}</p>
        <p>{storyline}</p>
        <p>{imagePath}</p>
        <p>{rating}</p>
      </div>
    );
  }
}
