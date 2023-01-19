import React from "react";

import ComponenteFilha from "./ComponenteFilha";

function ComponenteMae(props){

    function clicou(){
        return console.log("O botão da Filha foi clicado!")
    }

    return(
        <div className="componente">
            <p className="titulo" >Título: {props.titulo} </p>
            <ComponenteFilha click={clicou} titulo="Filha"></ComponenteFilha>
        </div>
    )
}

export default ComponenteMae