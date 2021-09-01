// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <div className="card">
        <h2>{ title }</h2>
        <h3>{ subtitle }</h3>
        <p>{ storyline }</p>
        <p>{ rating }</p>
        <h4>{ imagePath }</h4>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
