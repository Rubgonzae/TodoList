import React from 'react';

const TaskItem = (props) => {
    return (
        
        <li key={ props.key } className="list-group-item">  {props.name}</li>
    );
};

export default TaskItem;