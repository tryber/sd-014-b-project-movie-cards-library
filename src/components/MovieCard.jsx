// implement MovieCard component here
import React from 'react'; // JSX transform turns it into regular JavaScript:
import Rating from './Rating';

class MovieCard extends React.Component { // component estilo class
  render() { // fator fundamental na construção de classe component
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie; 

    return (
      <div className="movie">
        <img src={ imagePath } alt="test"/>
        <h4> { title } </h4>
        <h5> { subtitle } </h5>
        <p> { storyline } </p>
        <Rating rating={ rating } />
      </div>
    );
  }
}

export default MovieCard;
