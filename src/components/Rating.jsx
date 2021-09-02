// implement Rating component here
import React from 'react'; // JSX transform turns it into regular JavaScript:

class Rating extends React.Component { // component estilo class
    render() { 
    const rating = this.props.rating;
        return ( 
            <div className="rating">
                <p> Rating {rating} </p>
               
            </div>
        );
    }
}

export default Rating;