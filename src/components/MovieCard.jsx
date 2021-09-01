import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie:{title, subtitle, storyline, rating, imagePath} } = this.props
    return(
      <div>
      <img src={imagePath} alt={`${title} sprite`} />
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      <p>{storyline}</p>
      <Rating rating={rating}/>
      </div>
    )
  }
}

export default MovieCard;