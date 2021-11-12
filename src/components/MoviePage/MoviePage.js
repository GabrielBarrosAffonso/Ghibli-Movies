import React , { useEffect , useState } from "react"
import { useParams } from "react-router-dom"
import "./style.css"

const MoviePage = () => {
    const [ movie , setMovie ] = useState([])
    const { movieId } = useParams()


    useEffect((id) => {
        id = movieId
        fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
        .then((result) => result.json())
        .then((result) => {
            setMovie(result)
        })       
    }, [])

    return(
        <section className="ghibli-movie-section">
            <article className="ghibli-movie-article">
                <img className="ghibli-movie-image" src={movie.image} alt={movie.title}/>
            </article>
            <article className="ghibli-movie-article">
                <div>
                    <h1 className="ghibli-movie-title">{movie.title}</h1>
                    <span className="ghibli-movie-original">{movie.original_title} / {movie.original_title_romanised}</span>
                </div>
                <div className="ghibli-movie-infos">
                    <h5 className="ghibli-movie-director">Director: {movie.director}</h5>
                    <h5 className="ghibli-movie-producer">Productor: {movie.producer}</h5>
                    <p className="ghibli-movie-description">{movie.description}</p>
                </div>

            </article>
        </section>
    )
}

export default MoviePage