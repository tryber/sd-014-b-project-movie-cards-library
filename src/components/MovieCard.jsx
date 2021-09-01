import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
    return (
      <section className="MovieCard">
        <div className="MovieImage">
          <img src={ imagePath } alt={ `Capa do filme ${title} ` } />
        </div>
        <div className="MovieTitle">
          <h4>{ title }</h4>
          <h5>{ subtitle }</h5>
        </div>
        <p>{ storyline }</p>
        <p>{ rating }</p>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
