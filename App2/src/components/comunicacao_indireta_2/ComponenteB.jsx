import React from "react";

export default (props) => {
    
    let valor1 = 0
    function executar(){
        valor1 = Math.random()
        props.funcao('valor:' + valor1, 'João')
    }

    return(
        <div className="componente">
            <p className="titulo">Título: {props.titulo} </p>
            <button onClick={executar}>Executar</button>
            <p>{valor1}</p>
        </div>
    )
}