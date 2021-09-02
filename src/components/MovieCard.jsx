import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyLine, imagePath, rating } = this.props;
    return (
      <div>
        <p>{title}</p>
        <p>{subtitle}</p>
        <p>{storyLine}</p>
        <p>{imagePath}</p>
        <p>{rating}</p>
      </div>
    );
  }
}



export default MovieCard;
