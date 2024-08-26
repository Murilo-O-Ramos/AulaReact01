import { Component } from "react";

export class Contador extends Component{
    constructor(props){
        super();
        this.state = {valor: 0};
        //this.incrementar = this.incrementar.bind(this);
        //this.decrementar = this.decrementar.bind(this);
    }

    incrementar(){
        this.setState({valor: this.state.valor +1});
    }

    decrementar(){
        this.setState({valor: this.state.valor -1});
    }

    render(){
        return(
        <div>
            <div className="visor">
                <h1>{this.state.valor}</h1>

            </div>

            <div classname="botoes">
                    <button onClick={() => {this.incrementar();}}>+</button>
                    <button onClick={() => {this.decrementar();}}>-</button>
            </div>
        </div>);
    }
}