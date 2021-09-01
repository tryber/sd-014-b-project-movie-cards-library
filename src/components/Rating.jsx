import React from 'react';

class Rating extends React.Component {
  render() {
    const rating = this.props.rating;
    return (
      <div className="rating">{rating}</div>
    );
  }
}

export default Rating;
