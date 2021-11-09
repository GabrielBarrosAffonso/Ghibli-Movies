import './style.css';
import React from "react"

const Cards = (props) => {

    return(
        <article id={props.id} className="ghibli-card">
            <div className="ghibli-card-image-box">
                <div className="ghibli-card-image-click">
                    <span>Click for more info</span>
                </div>
                <img src={props.image} alt="Movie" className="ghibli-card-image"/>
            </div>
            <h3 className="ghibli-card-title">{props.title}</h3>
            <span className="ghibli-card-original-title">{props.original}</span>
        </article>
    )
}

export default Cards