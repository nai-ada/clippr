import React from  'react';
import { useParams } from 'react-router-dom';

const MovieInfoPage = () => {

    // here is how you can call each movie 
    const { id } = useParams();

    return (
        <div>
            MovieInfoPage { id }
        </div>
    )

}

export default MovieInfoPage