import React from "react"

import ComponenteFilho from "./ComponenteFilho"

function ComponentePai(props){
    return(
        <div className="componente">
            <p className="titulo"> Título: {props.titulo} </p>
            <p>Pai</p>
            <ComponenteFilho titulo="Componente Filho" cargo = "Administrador" >
                João Ribeiro
            </ComponenteFilho>

            <ComponenteFilho titulo="Componente Filho" cargo = "Operadora" >
                Ana Silva
            </ComponenteFilho>

            <ComponenteFilho titulo="Componente Filho" cargo = "Operador" >
                Joaquim da Costa
            </ComponenteFilho>
        </div>
    )
}

export default ComponentePai