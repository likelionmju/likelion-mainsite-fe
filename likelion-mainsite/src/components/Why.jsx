import './Why.css';
import React from 'react';

const Why = (props) => {
    return (
        <div className="why_container">
            <img className="why_icon" src={props.img} />
            <p className="why_content">{props.content}</p>
        </div>
    );
};

export default Why;