import React from 'react';

class Rating extends React.Component {
  render() {
    return(
      <span>{ this.props.rating }</span>
    );
  }
}

export default Rating;
