// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating} = this.props.movie;
    const { key } = this.props

    return (
      <section>
        <img src={ imagePath } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
      </section>
      
    )
  }
}

export default MovieCard;