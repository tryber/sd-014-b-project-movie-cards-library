import React from 'react';

class MovieList extends React.Component {
    render(){
        const array = this.props.movies

        return ( array.map((element) => { <MovieCard /> })
            
         )
    }
}




export default MovieList;