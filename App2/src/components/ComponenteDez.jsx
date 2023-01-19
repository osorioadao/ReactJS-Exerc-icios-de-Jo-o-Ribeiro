import React from "react"

export default (props) => {
    
    const estilo = {
        color: "red",
        padding: "10px",
        backgrounColor: "yellow"
    }
    return(
        <div className="componente">
            <p className="titulo">Título: {props.titulo}</p>
            <p style={estilo} >Texto do paragráfo</p>
        </div>
    )
}