// implement MovieList component here
import React from 'react';

class MovieList extends React.Component {
  render() {
    const { title, imagePath, subtitle, storyline } = this.props.movies;
    return (<div>
      <img src= { imagePath }/>
      <h1>{ title }</h1>
    </div>);
  }
}

export default MovieList;
