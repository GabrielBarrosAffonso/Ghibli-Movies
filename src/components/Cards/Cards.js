import './style.css';
import React from "react"
import {
    Link
} from "react-router-dom"

const Cards = (props) => {

    return(
        <article id={props.id} className="ghibli-card">
            <div className="ghibli-card-image-box">
                <Link className="ghibli-href" to={`${props.id}`}>
                    <div className="ghibli-card-image-click">
                        <span>Click for more info</span>
                    </div>
                </Link>
                <img src={props.image} alt="Movie" className="ghibli-card-image"/>
            </div>
            <h3 className="ghibli-card-title">{props.title}</h3>
            <span className="ghibli-card-original-title">{props.original}</span>
            <Link className="ghibli-button ghibli-href" to={`${props.id}`}>Movie Info</Link>
        </article>
    )
}

export default Cards