import React, { Component } from "react";

class Equipe extends Component{
    render(){
        return(
            <div>
                <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>
                <Social LinkedIn={this.props.LinkedIn}/>
            <hr/>
            </div>
        )
    }
}

class Sobre extends Component{
    render(){
        return(
            <div>
                <h2>Olá sou o(a) {this.props.nome}</h2>
                <h3>Cargo: {this.props.cargo}</h3>
                <h3>Idade: {this.props.idade}</h3>
            </div>
        )
    }
}

class Social extends Component{
    render(){
        return(
            <div>
                <a href={this.props.LinkedIn}>LinkedIn</a>
                <a>Youtube</a>
            </div>
        )
    }
}

function App(){
    return(
        <div>
            <h1>Conheça nossa equipe:</h1>
            <Equipe nome= 'Iago' cargo= 'Full Cycle' idade= '21' LinkedIn= 'https://google.com'/>
        </div>
    )
}

export default App;