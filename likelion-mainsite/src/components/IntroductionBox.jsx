import React from 'react';
import './IntroductionBox.css';

const IntroductionBox = ({introduction}) => {
    return (
        <div className='introduction-box-container'>
            <div className='introduction-box-img-container'>
                <img className="introduction-box-img" src={introduction.img} />
            </div>
            <div className='introduction-box-content' dangerouslySetInnerHTML={{ __html: introduction.content }}></div>
        </div>
    );
};

export default IntroductionBox;