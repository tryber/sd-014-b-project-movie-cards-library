// implement Rating component here
import React from 'react';
import PropType from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <span className="rating">{ rating }</span>
    );
  }
}

Rating.propTypes = {
  rating: PropType.number.isRequired,
};

export default Rating;
