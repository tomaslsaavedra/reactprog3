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
                <div> {this.props.name} {this.props.lastname} </div>
                <div>
                    <img src={this.props.image} height="100" width="auto"></img>
                </div>
                <div> {this.props.email} </div>
                <div> {this.props.birthdate.substring(0, 10)} / {this.props.age} años</div>
                <div> 
                    <div> {this.props.state} - {this.props.country} </div>
                    <div> {this.props.phone} </div>
                </div>
                <div>
                    <button class="boton" onClick={this.props.onDelete.bind (this,this.props.id)}>DELETE</button>
                </div>
            </div>
        </div>
    )
    }
}