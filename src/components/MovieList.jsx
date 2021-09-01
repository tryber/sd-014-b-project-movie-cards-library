// implement MovieList component here

import React from 'react';

class MovieList extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath} = this.props.movies
    return (
      <div>
        <h1>{ title }</h1>
        <h1>{ subtitle }</h1>
        <h1>{ storyline }</h1>
        <h1>{ rating }</h1>
        <h1>{ imagePath }</h1>
      </div>
    );
  }
}

export default MovieList;
