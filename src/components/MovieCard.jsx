import React from 'react';
import movies from '../data';
// import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    // const { movie } = this.props;
    return (
      <div>
        <img src={ movies.imagePath } alt="imagem do filme" />
        <h4 className="movie-title">{ movies.title }</h4>
      </div>
    );
  }
}

export default MovieCard;
