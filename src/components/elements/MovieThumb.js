import React from "react"
import {StyledMovieThumb} from "../styles/StyledMovieThumb"

const MovieThumb = ({image, movieId, clickable, movieName}) => {

    return (
        <StyledMovieThumb> 
            { clickable ?
                ( <img src={image} className="clickable" alt={movieName}/> )
                : ( <img src={image} alt={movieName} /> )

            }
        </StyledMovieThumb>
    )
}

export default MovieThumb