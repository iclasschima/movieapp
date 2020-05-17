import React from "react"

import {IMAGE_BASE_URL, BACKDROP_SIZE} from "../config"

//import components
import HeroImage from "./elements/HeroImage"
import SearchBar from "./elements/SearchBar"
import Grid from "./elements/Grid"
import MovieThumb from "./elements/MovieThumb"
import LoadMoreBtn from "./elements/LoadMoreButton"
import Spinner from "./elements/Spinner"

//custom hook
import  { useHomeFetch } from "./hooks/useHomeFetch"

const Home = () => {

    const [{state, loading, error}, fetchMovies] = useHomeFetch()

    if (error) return <div>Something went wrong</div>
    if (!state.movies[0]) return <Spinner /> 

    return (
        <>
        <HeroImage 
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
            title={state.heroImage.original_title}
            text={state.heroImage.overview}
        />
        <SearchBar />
        <Grid />
        <MovieThumb />
        <Spinner />
        <LoadMoreBtn />
    </>
    )
}

export default Home
