import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movies: { title, subtitle, storyline, imagePath } } = this.props;
    return (
      <section>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <img src={ imagePath } alt="Imagem do Filme" />
      </section>
    );
  }
}

// ref: https://trybecourse.slack.com/archives/C023YHXAEGM/p1630524076409600

MovieCard.propTypes = {
  movies: PropTypes.shape.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  // rating: PropTypes.number.isRequired,
};

export default MovieCard;
