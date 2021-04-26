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
      let mas = document.querySelector(".agregar").value 
        fetch ("https://randomuser.me/api/?results=" + mas)
        .then(resultado => resultado.json())
        .then(items => {
            items.results.map((item) => {
            this.state.items.push(item)})
            this.setState({items: this.state.items})
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
        <input class="agregar" type="number"></input>
        <button onClick={this.agregar.bind(this)}>Agregar mas</button>
        <button onClick={this.borrartodas.bind(this)}>Borrar todas las tarjetas</button>
      </div>
      {
        this.state.items.map((item)=> {
          return <Main onDelete={this.borrar.bind(this)}
            key={item.login.uuid}
            id={item.login.uuid}
            name={item.name.first}
            lastname={item.name.last}
            image={item.picture.medium}
            email={item.email}
            birthdate={item.dob.date}
            age={item.dob.age}
            street={item.location.street.name}
            street_number={item.location.street.number}
            city={item.location.city}
            state={item.location.state}
            country={item.location.country}
            postcode={item.location.postcode}
            phone={item.phone}
            registered={item.registered.date}
              />
        }
        )
      }
    </div>
  );
  }
}