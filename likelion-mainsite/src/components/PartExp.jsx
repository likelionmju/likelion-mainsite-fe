import React from "react";
import './PartExp.css';

const PartExp = (props) => {
    return (
        <>
            <p className="part_exp_content">{props.content}</p>
        </>
    );
};

export default PartExp;