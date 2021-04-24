import './App.css';
import Main from './component/Main';
import { Component } from "react";

export default class App extends Component {

  agregar() {
    console.log("agregar")
  }

  borrar() {
    console.log("borrar")
  }

  render(){
  return (
    <div className="App">
      <div class="botones">
        <button onClick={this.agregar.bind(this)}>Agregar una tarjeta mas</button>
        <button onClick={this.borrar.bind(this)}>Borrar todas las tarjetas</button>
      </div>
      <Main/>
      <Main/>
      <Main/>
      <Main/>
      <Main/>
    </div>
  );
  }
}