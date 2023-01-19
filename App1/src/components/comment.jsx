import React from "react"
import './comment.css'
import Texto from "./Texto"

function Comment(props){

    function Maiusculas(texto){
        return texto.toUpperCase()
    }

    return(
        <>
            <section className="comment">
                <p className="title">{Maiusculas(props.title)}</p>
                <p className="text">{props.comment}</p>
                <p className="author">Autor: {props.author}</p>
            </section>
        </>
    )
}

export default Comment