// implement Rating component here
import React, { Component } from 'react';

class Rating extends Component {
  render() {
    return (
      <section className="rating">
        {this.props.rating}
      </section>
    );
  }
}

export default Rating;
