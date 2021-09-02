// implement MovieCard component here
import React from 'react'; // JSX transform turns it into regular JavaScript:
import Rating from './Rating';

class MovieCard extends React.Component { // component estilo class
  render() { // fator fundamental na construção de classe component
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props; // destructuring props assignment

    return (
      <section className="movie">
        <img src={ imagePath } alt="test" />
        <h4> { title } </h4>
        <h5> { subtitle } </h5>
        <p> { storyline } </p>
        <Rating rating={ rating } />
      </section>
    );
  }
}

export default MovieCard;
