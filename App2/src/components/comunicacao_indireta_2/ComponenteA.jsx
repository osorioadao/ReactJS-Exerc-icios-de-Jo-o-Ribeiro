import React from "react";

import ComponenteB from "./ComponenteB";

export default (props) => {
    function executar(valor1, valor2){
        console.log(valor1, valor2)
    }
    
    return(
        <div className="componente">
            <p className="titulo">Título: {props.titulo} </p>
            <ComponenteB titulo="Filho v2" funcao={executar} ></ComponenteB>
        </div>
    )
}