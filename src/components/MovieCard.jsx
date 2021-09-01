import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <div key={ title }>
        <section>
          <img src={ imagePath } alt={`Imagem do filme ${title}`} />
        </section>
        <section>
          <h4>{ title }</h4>
          <h5>{ subtitle }</h5>
          <p>{ storyline }</p>
        </section>
      </div>
    );
  }
}

export default MovieCard;