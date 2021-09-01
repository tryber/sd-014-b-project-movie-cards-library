// implement Rating component here
import React from 'react';

class Rating extends React.Component {
  render() {
    return (<h1 className="rating">{this.props.rating}</h1>);    
  }
}

export default Rating;