import React,{ Component } from 'react';
import Dado from "./Dado";

class Aplicacion extends Component{
  constructor(){
    super();
    this.state = {
      numero : 1
    }
  }
  tirar = ()=>{
    this.setState({numero : 1 + Math.floor(Math.random()*6)})
   
  }
render(){
    return(
      <>
      <Dado numero={this.state.numero} />
      <a href="#" onClick={
        evento => {
          evento.preventDefault();
          this.tirar();
        }
      }>Tirar!</a>
      </>
    )
  }
}
 

  









export default Aplicacion;


//girar dado
//funcionalidad al boton