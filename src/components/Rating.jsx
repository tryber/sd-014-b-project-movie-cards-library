// implement Rating component here
import React, { Component } from 'react';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <div>
        <span className="rating">{ rating }</span>
      </div>
    );
  }
}

export default Rating;
