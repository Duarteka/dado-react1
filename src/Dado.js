import React,{ Component } from 'react';



class Dado extends Component{
    constructor(){//propiedades basicas para funcionar 
        super(); //extiende a su padre
        this.state = {
            clases : ["uno","dos","tres","cuatro","cinco","seis"]
        } 
    }
render(){
    var arrayNumero = []; //variable chivata, excusa para usar el map
    for(var i = 0; i < this.props.numero; i ++){
        arrayNumero.push(this.props.numero) 
    }
    return(
        <div className={`dado ${this.state.clases[this.props.numero - 1]}`}>
            {arrayNumero.map((item,indice) => <div className="circulo" key={indice}></div>)}
        </div>
        );
    }
}
 
 
export default Dado;


//girar dado
//funcionalidad al boton