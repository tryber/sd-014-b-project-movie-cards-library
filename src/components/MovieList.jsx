// implement MovieList component here
import React, { Component } from 'react';

export default class MovieList extends Component {
  render() {
    return <div>{this.props.movies}</div>;
  }
}
