import React, { Component } from 'react';
import movies from '../data';
// Por que não precisa de .js depois de data?

export default class MovieList extends Component {
  render() {
    return (
      <div>{movies}</div>
    );
  }
}
