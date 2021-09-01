import React from 'react';
import { data } from '../data';

class MovieCard extends React.Component {
  render() {
  const { movie: {title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <section>
        <img src={ imagePath }></img>
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <footer>{ rating }</footer>
      </section>
    );
  }
}

export default MovieCard;

