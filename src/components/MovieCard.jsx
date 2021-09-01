import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <div key={ title }>
        
      </div>
    );
  }
}

export default MovieCard;