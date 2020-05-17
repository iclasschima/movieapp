import React from "react"
import {StyledMovieThumb} from "../styles/StyledMovieThumb"

const MovieThumb = ({image, movieId, clickable}) => {
    return (
        <StyledMovieThumb> 
            { clickable ?
                ( <img src={image} className="clickable" alt="moviethumb"/> )
                : ( <img src={image} alt="moviethumb" /> )

            }
        </StyledMovieThumb>
    )
}

export default MovieThumb