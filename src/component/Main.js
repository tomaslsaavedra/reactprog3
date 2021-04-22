import {Component} from "react"

export default class Child extends Component {
    constructor(){
        super();
        this.state={
            color: "black"
        }

    }
    cambiodeColor(newColor){
        this.setState({color:newColor});

    }

    render(){
    return (
        <div class="container">
            <div class="card" style={{borderColor: this.state.color}} onMouseEnter={this.cambiodeColor.bind (this,"green")} onMouseLeave= {this.cambiodeColor.bind (this,'black')}>
                <div> Tomas </div>
                <div> tomas@lopezsaavedra.com.ar </div>
                <div>
                    <img src="https://i1.sndcdn.com/avatars-000219066532-yudgtg-t500x500.jpg" height="100" width="auto"></img>
                </div>
                <div> 22 años</div>
                <div> 
                    <div> Buenos Aires </div>
                    <div> +54 9 11 2185-0815 </div>
                </div>
                <div>
                    <button class="boton">DELETE</button>
                </div>
            </div>
        </div>
    )
    }
}