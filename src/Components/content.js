import React from 'react';

const Content = (props) => {
    return (
        <div className="Container content">
            {props.children }
        </div>
    );
};

export default Content;