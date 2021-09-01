import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props.rating;
    return (
      <section>
        {rating}
      </section>
    );
  }
}

export default Rating;
