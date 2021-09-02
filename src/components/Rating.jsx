// implement Rating component here
import PropTypes from 'prop-types';
import React, { Component } from 'react';


class Rating extends Component {
  render() {
    const { rating } = this.props
    return (
      <div>
        <p className="rating">{rating}</p>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
}.isRequired;

export default Rating;
