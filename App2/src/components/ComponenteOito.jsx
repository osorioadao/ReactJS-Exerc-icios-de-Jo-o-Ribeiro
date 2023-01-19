import React from "react"

export default function(props){

    function Condicao(){
        switch(props.valor){
            case "Osório":
                return <p>É o meu nome</p>
                break;
            case "Filomena":
                return <p>É o nome da minha Mãe</p>
                break;
            default:
                return <p>Desconheço quem tenha esse nome</p>
                break;
        }
    }

    return(
        <div className="componente">
            <p className="titulo">Titulo: {props.titulo}</p>
            {Condicao()}
        </div>
    )
}