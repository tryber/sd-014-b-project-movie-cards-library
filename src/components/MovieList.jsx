import React from 'react';

class MovieList extends React.Component {
    render() {
        const { title, subtitle, storyline, rating, imagePath } = this.props;
        return (
          <section>
            <p><strong>{ title }</strong>,
              { subtitle },
              { storyline },
              { rating }
            </p>
            <img src={imagePath}  alt={'Imagem do filme ${title}'} />
          </section>
        )
    }
}

export default MovieList;
