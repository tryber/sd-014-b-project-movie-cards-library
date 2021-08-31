// Passo 3
import React from 'react';

class MovieCard extends React.Component {
  render() {
    // 3) Receber o movies como prop. Fazer fora do return!
    // Passo 6 (adicionar { title, subtitle, storyline, imagePath e rating })
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
    return (
    // Passo 6
      <div>
        {/* Passo 7 */}
        <img src={ imagePath } alt={ title } />
        {/* Passo 8 */}
        <h4>{ title }</h4>
        {/* Passo 9 */}
        <h5>{subtitle}</h5>
        {/* Passo 10 */}
        <p>{ storyline }</p>
      </div>
    );
  }
}

export default MovieCard;
