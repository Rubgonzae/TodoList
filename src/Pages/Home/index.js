import React, { Component } from 'react';
import Devices from './components/devices';
import mapDevices from './components/map-devices';

class Home extends Component {

    state = {
        listDevices: []
    }
    /*
    constructor(props){
        super(props);
       
        
    }*/

    componentDidMount(){
        console.log('el componente fue montado')
        let deviceList = [
            {
                id: 1,
                name: 'UTF-984'
            },
            {
                id: 2,
                name: 'CTY-924'
            },
            {
                id: 3,
                name: 'UJI-089'
            },
            {
                id: 4,
                name: 'LHJ-471'
            },
            {
                id: 5,
                name: 'JWR-110'
            }
        ];
        this.setState({listDevices: deviceList});  //this.listDevices = deviceList
    }

    clicHandler(){
        console.log('evento presionado');
        let newDevice = {
            id: 6,
            name: 'RJP-999'
        }
        let newListDevices = [...this.state.listDevices, newDevice];        
        this.setState({ listDevices: newListDevices });
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                     <Devices eventAddDev={ this.clicHandler.bind(this) } list={this.state.listDevices}  />
                </div>
                <div className="col-md-9 b">
                    {/* <button onClick={ this.clicHandler.bind(this) } type="button" class="btn btn-success btn-margin"> Evento botón </button> */}
                    <mapDevices />
                </div>
            </div>
            
        );
    }
}

export default Home;