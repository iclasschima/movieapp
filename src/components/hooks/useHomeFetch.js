import { useState, useEffect } from "react"
import axios from "axios"
import { API_URL, API_KEY } from "../../config"

export const useHomeFetch = () => {

    const [state, setState] = useState({ movies: []})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchMovies = async endpoint => {

        setError(false)
        setLoading(true)

        try {

            const res = await axios.get(endpoint)
            const result = await res.data
            setState(state => ({
                ...state,
                movies: [...result.results],
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
        fetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}`)
    }, [])

    return [{state, loading, error}, fetchMovies]
}
