// implement MovieCard component here
import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movies: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <div className="card mb-4 shadow p-2 rounded" Style="width: 20rem;">
        <img src={ imagePath } alt="Capa do Filme" className="card-img-top" />
        <div className="card-body">
          <h4 className="card-title">{ title }</h4>
          <h5 className="card-title text-muted">{ subtitle }</h5>
          <p className="card-text">{ storyline }</p>
          <Rating rating={ rating } />
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
