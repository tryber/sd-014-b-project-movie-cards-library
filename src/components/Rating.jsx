// implement Rating component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating } = this.props;

    return (
      <div>
        <p className='rating' >{ rating }</p>
      </div>
    );

  }
}

Rating.propTypes ={
  rating: PropTypes.number.isRequired
};

export default Rating;