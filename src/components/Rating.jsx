import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <element className="rating">
        { rating }
      </element>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
}.isRequired;

export default Rating;
