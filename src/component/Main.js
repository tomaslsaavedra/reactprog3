import {Component} from "react"

export default class Child extends Component {
    constructor(){
        super();
        this.state={
            color: "black",
            detalle: "none"
        }

    }
    cambiodeColor(newColor){
        this.setState({color:newColor});

    }

    detalle = () => {
        if (this.state.detalle === 'block' ) {
        this.setState({
            detalle: 'none',
        })
        } else {
        this.setState({
            detalle: 'block'
        })
    }}

    render(){
    return (
        <div class="container">
            <div class="card" style={{borderColor: this.state.color}} onMouseEnter={this.cambiodeColor.bind (this,"red")} onMouseLeave= {this.cambiodeColor.bind (this,'black')}>
                <div> {this.props.name} {this.props.lastname} </div>
                <div>
                    <img src={this.props.image} height="100" width="auto"></img>
                </div>
                <div> {this.props.email} </div>
                <div> {this.props.birthdate.substring(0, 10)} / {this.props.age} años</div>
                <div style={{display: this.state.detalle}}> 
                    <ul>
                        <li>{this.props.street} {this.props.street_number}</li>
                        <li>{this.props.state}/{this.props.country}</li>
                        <li>{this.props.phone}</li>
                        <li>Member since: {this.props.registered.substring(0, 10)}</li>
                    </ul>
                </div>
                <div>
                    <button class="boton" onClick={this.props.onDelete.bind (this,this.props.id)}>DELETE</button>
                    <button onClick = { () => this.detalle("block")}>DETALLE</button>
                </div>
            </div>
        </div>
    )
    }
}