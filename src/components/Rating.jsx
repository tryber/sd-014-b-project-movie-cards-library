/* eslint-disable react/prop-types */
import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <section>
        <p>{rating}</p>
      </section>
    );
  }
}

export default Rating;
