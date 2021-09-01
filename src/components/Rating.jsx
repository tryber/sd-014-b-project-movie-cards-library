// implement Rating component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { movies: { rating } } = this.props;
    return (
      <section>{ rating }</section>
    );
  }
}

Rating.propTypes = {
  movies: PropTypes.shape({
    rating: PropTypes.number,
  }).isRequired,
};

export default Rating;
