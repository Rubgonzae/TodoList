import React from 'react';
import './styles.css';
import TaskItem from './task-item'
import {Link} from 'react-router-dom'

const Tasks = (props) => {
    return (
        <div className="devices-container">
            <h4 className="text-center">Task List</h4>
            <ul className="list-group">
                {
                    props.list.tarea((task, key) => {
                        return (
                           <TaskItem key={ key } name={ task.name } />
                        )
                    } )
                }
                
                
            </ul>
            <div className="center-component">
                <button onClick={props.eventAddDev} type="button" class="btn btn-primary btn-margin"> + </button>
               
                <Link class="btn btn-primary btn-margin" to={ '/device' }>
                    Upd
                </Link>
            </div>    
        </div>
    );
};


export default Tasks;