import React from 'react';
// import movies from './data';

class MovieList extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie

    return (
      <section>
        <p>
          {title}
          {subtitle}
          {storyline}
          {rating}
        </p>
        <img src={imagePath} alt={`magem do filme ${title}`} />
      </section>
    );
  }
}

export default MovieList;
