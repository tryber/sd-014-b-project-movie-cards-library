// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating} = this.props.movie;

    return (
      <section className='movie-card'>
        <img className='movie-card-image' src={ imagePath } alt={`Imagem do filme ${title}`} />
        <div className='movie-card-body'>
          <h4 className='movie-card-title'>{ title }</h4>
          <h5 className='movie-card-subtitle'>{ subtitle }</h5>
          <p className='movie-card-storyline'>{ storyline }</p>
        </div>
        <div className='movie-card-rating'>
          <Rating rating={rating}/>
        </div>
      </section>
    )
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired
}

export default MovieCard;