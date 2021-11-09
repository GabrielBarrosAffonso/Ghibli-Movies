import React , { useState , useEffect } from "react"
import Cards from "../Cards" 
import "./index.css"

const ListLayout = () => {
    const[movies, setMovies] = useState([])

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then((result) => result.json())
        .then((result) => {
            setMovies(result)
        })
    }, [])

    return(
        <section className="ghibli-listing">
            { movies.map((movie, index) => (
                <Cards 
                    key={index} 
                    title={movie.title}
                    original={movie.original_title}
                    image={movie.movie_banner}
                    id={movie.id}
                    />
                ))
            }
        </section>
    )
}

export default ListLayout