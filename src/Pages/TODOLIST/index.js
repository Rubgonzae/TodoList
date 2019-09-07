import React, { Component } from 'react';
import { FaSistrix } from "react-icons/fa"
import './styles.css';

class ToDoList extends Component {

    state = {
        
            id: 'HHH-222',
            task: '123456',
            
    }
    

    submitHandler(event){
        event.preventDefault();
        console.log('form', this.setState);
    }
    render() {
       
        return (
            <div className="content-back">
                <div className="form-back ">
                    <h1>New Tasks</h1>
                    <form onSubmit={ this.submitHandler.bind(this) } className="form-group form-margin">
                        <div className="form-group row">
                            <label htmlfor="Name" className="col-sm-2 col-form-label">Nombre</label>
                            <div className="col-sm-7">
                                <input className="form-control form-control-sm" type="text" id="Name" onChange={ e => this.setState({name: e.target.value})} value={this.state.name} placeholder={FaSistrix}></input>
                            </div>  
                            <button type="submit" className="btn btn-primary col-sm-3">Guardar</button>                        
                           
                        </div>
                        
                    </form>
                    
                </div>
            </div>    
        );
                }
            }
            
export default ToDoList;  