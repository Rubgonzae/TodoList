import React, { Component } from 'react';
import { ToDoContext } from '..';

class TodoItem extends React.PureComponent {
    render() {
        return (
            <ul>
                <ToDoContext.Consumer>{
                    ({ list }) => 
                        list.tareas((task, key) => 
                            <li key = {key}>
                                {task}
                                <button>Delete</button>
                            </li>
                        )
                }
                   
                </ToDoContext.Consumer>
            </ul>
        );
    }
}

export default TodoItem;