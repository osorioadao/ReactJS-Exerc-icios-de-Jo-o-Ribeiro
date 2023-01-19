import React from "react";

//export default (props) => 
    //<div className="componente">
    //    <p>Componente: {props.titulo}</p>
    //</div>

// const ComponenteTres = (props) => {
//     return(
//         <div className="componente">
//             <p>Título: {props.titulo}</p>
//         </div>
//     )
// }

const ComponenteTres = (props) => {

    return(
        <div className="componente">
            <p className="titulo">Título: {props.titulo} </p>
            <p>Subtitulo: {props.subtitulo} </p>
        </div>
    )
}

export default ComponenteTres