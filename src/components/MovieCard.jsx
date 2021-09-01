import React from 'react';

class MovieCard extends React.Component {
    render(){
        const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
        return ( 
            <div>
                <img src={imagePath} alt={`Imagem do filme ${title}`}></img>
                <h2> {title} </h2>
                <h3> {subtitle} </h3>
                <p> {storyline} </p>
                <p> {rating} </p>
            </div>
        )
    }
}

export default MovieCard;