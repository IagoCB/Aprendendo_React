import React, {Component} from "react";

class Feed extends Component{
    render(){
        return(            
            <div key={this.props.key}>
                <h3>{this.props.username}</h3>
                <a> 
                    {this.props.curtidas > 1 ? 'Curtidas: ' + this.props.curtidas : 'Curtida: ' + this.props.curtidas} 
                    / 
                    {this.props.comentarios > 1 ? 'Comentarios: ' + this.props.comentarios : 'Comentario: ' + this.props.comentarios}
                </a>
                <hr/>
            </div>
        )
    }
}

export default Feed