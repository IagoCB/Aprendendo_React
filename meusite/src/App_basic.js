import React from "react";

const Equipe = (props) =>{
    return(
        <div>
            <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
            <Social LinkedIn={props.LinkedIn}/>
            <hr/>
        </div>
    )
}

const Sobre = (props) =>{
    return(
        <div>
            <h2>Olá sou o(a) {props.nome}</h2>
            <h3>Cargo: {props.cargo}</h3>
            <h3>Idade: {props.idade}</h3>
        </div>
    )
}

const Social = (props) =>{
    return(
        <div>
            <a href={props.LinkedIn}>LinkedIn</a>
            <a>Youtube</a>
        </div>
    )
}

function App(){
    return (
        <div>           
            <h1>Conheça nossa equipe:</h1>
            <Equipe nome= 'Iago' cargo= 'Full Cycle' idade= '21' LinkedIn= 'https://google.com'/>
        </div>
    )
}

export default App;