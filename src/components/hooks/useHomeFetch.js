import { useState, useEffect } from "react"
import axios from "axios"
import { POPULAR_BASE_URL } from "../../config"

export const useHomeFetch = () => {

    const [state, setState] = useState({ movies: []})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchMovies = async endpoint => {

        setError(false)
        setLoading(true)

        const isLoadMore = endpoint.search("page")

        try {

            const res = await axios.get(endpoint)
            const result = await res.data
            setState(state => ({
                ...state,
                movies: isLoadMore !== -1 ? [...state.movies, ...result.results] : [...result.results],
                heroImage: state.heroImage || result.results[0],
                currentPage: result.page,
                totalPages: result.total_pages
            }))

        } catch (error) {
            setError(true)
            console.log(error)
        }

        setLoading(false)
    }

    useEffect(() =>{
        fetchMovies(`${POPULAR_BASE_URL}`)
    }, [])

    return [{state, loading, error}, fetchMovies]
}
