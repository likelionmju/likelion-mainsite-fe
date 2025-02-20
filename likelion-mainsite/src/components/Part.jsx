import React from 'react';
import './Part.css';
import PartTable from './PartTable';
import { useState } from 'react';

const Part = () => {
    const [part, setPart] = useState('web');

    const handlePartChange = (part) => {
        setPart(part);
    }

    return (
        <div className="part-container">
            <div className='part-title'>파트별 소개</div>
            <div className='part-box-container'>
                <div className='part-box'>
                    <div className={`part-subtitle ${part === 'web' ? 'active-part' : ''}`} onClick={() => handlePartChange("web")}>웹</div>
                    <div className={`part-subtitle ${part === 'server' ? 'active-part' : ''}`} onClick={() => handlePartChange("server")}>서버</div>
                </div>
                <PartTable part={part} setPart={setPart}/>
            </div>
        </div>
    );
};

export default Part;