import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div>
        <p>
          { rating }
        </p>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
};

export default Rating;
