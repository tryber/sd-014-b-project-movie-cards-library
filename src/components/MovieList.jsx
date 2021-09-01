import React from 'react';
import Moviecard from './MovieCard';

class Movielist extends React.Components {
  render() {
    return (
      <div>
        { movies.map((unit) => <Moviecard key={ unit.title } movie={ unit } />) }
      </div>
    );
  }
}

export default Movielist;
