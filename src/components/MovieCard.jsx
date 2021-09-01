// implement MovieCard component here
import React, { Component } from 'react';
import movies from '../data';

export default class MovieCard extends Component {
  render() {
    const { movie: {
      title, subtitile, storyline, imagePath, rating
    } } = this.props
    return (
      <div>
        
      </div>
    );
  }
}
