import React from 'react';
import PropTypes from 'prop-types';
import ButtonWatch from './ButtonWatch';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, imagePath, subtitle, storyline, rating, link } = movie;
    return (
      <section className="movie-card">
        <img className="movie-card-image" src={ imagePath } alt={ title } />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{ title }</h4>
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          <p className="movie-card-storyline">{ storyline }</p>
          <div className="little-menu">
            <ButtonWatch weblink={ link } />
              <div className="movie-card-rating">
                <h6>Classificação:</h6>
                <Rating rating={ rating } />
              </div>
            </div>
          </div>
        </section>
      );
    }
  }