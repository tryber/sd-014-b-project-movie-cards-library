import React from 'react';
import movies from '../data';

const MovieCard = () => {
  return(
    <div>
      {
        movies.map((card, index) => 
          <h4 key={index}>{card.title}</h4>
        )
        }
    </div>
  )
}

export default MovieCard;