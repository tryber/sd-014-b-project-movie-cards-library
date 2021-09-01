import React from 'react';
import movies from '../data';

class Rating extends React.Component {
  render() {
    const rating = this.props.rating;
    return (
      <div>
        <h1 className="rating">{ rating }</h1>
      </div>
    );
  }
}

export default Rating;
