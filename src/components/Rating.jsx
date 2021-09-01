import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Rating extends Component {
  render() {
    const { movies: rating } = this.props;
    return (
      <div>
        {rating}
      </div>
    )
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};