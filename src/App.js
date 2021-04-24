import './App.css';
import Main from './component/Main';
import { Component } from "react";

export default class App extends Component {

    constructor() {
      super();
      this.state = {
        items: [],
      }
    }

  componentDidMount(){
    
      fetch('https://randomuser.me/api/?results=10 ')
      .then(result=>result.json())
      .then(data=> {
        this.setState({items:data.results});
        console.log(data.results);
      })
    
      
    
  }
      


    agregar() {

      fetch('https://randomuser.me/api/')
      .then(result=>result.json())
      .then(data=> {
        this.state.items.push(data.results[0]);
        this.setState({items: this.state.items});
        console.log(data.results);

    
    })
    }

    borrar(idTarjeta){
      let resultado = this.state.items.filter((item)=>{
          return item.login.uuid !== idTarjeta;
        })
        this.setState({items:resultado})
      console.log("tarjeta a borrar:"+ idTarjeta);
    }
    
    borrartodas () {
      this.setState({items:[]});
    }

  render(){
  return (
    <div className="App">
      <div class="botones">
        <button onClick={this.agregar.bind(this)}>Agregar una tarjeta mas</button>
        <button onClick={this.borrartodas.bind(this)}>Borrar todas las tarjetas</button>
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