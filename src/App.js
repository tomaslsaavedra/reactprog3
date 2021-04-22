import './App.css';
import Main from './component/Main';
import { Component } from "react";

export default class App extends Component {

  render(){
  return (
    <div className="App">
      <div class="botones">
        <button>Agregar una tarjeta mas</button>
        <button>Borrar todas las tarjetas</button>
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