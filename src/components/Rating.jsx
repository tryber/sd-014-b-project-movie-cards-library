// implement Rating component here
import PropTypes from 'prop-types';
import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating">
        <span>
          {rating}
        </span>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
}.isRequired;

export default Rating;
