// implement Rating component here
import React from 'react'; // JSX transform turns it into regular JavaScript:
import PropTypes from 'prop-types';

class Rating extends React.Component { // component estilo class
  render() {
    const { rating } = this.props;
    return (
      <div className="rating">{rating}</div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
