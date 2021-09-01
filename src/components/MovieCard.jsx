import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    return <div>{text}</div>;
  }
}

MovieCard.propType = {
  text: PropTypes.string.isRequired,
};

export default MovieCard;
