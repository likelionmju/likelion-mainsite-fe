import './Card.css';
import React, { useState } from 'react';

const Card = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="card_container" onClick={handleClick}>
            <img className="card_icon" src={props.img} />
            <div className={`card_box ${isOpen ? 'open' : ''}`}>
                <p className="card_keyword">{props.keyword}</p>
                <p className="card_content">{props.content}</p>
            </div>
        </div>
    );
};

export default Card;