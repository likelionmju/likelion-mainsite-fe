import React, { useState } from 'react';
import './Part.css';
import PartTable from './PartTable';
import PartExp from './PartExp';

const Part = () => {
    const [part, setPart] = useState('web');

    const handlePartChange = (part) => {
        setPart(part);
    }

    return (
            <div className="part-container">
            <div className='part-title'>파트별 커리큘럼</div>
            <div className='part-box-container'>
                <div className='part-btn-box'>
                    <div className={`part-subtitle-btn ${part === 'web' ? 'active-part' : ''}`} onClick={() => handlePartChange("web")}>Front-end</div>
                    <div className={`part-subtitle-btn ${part === 'server' ? 'active-part' : ''}`} onClick={() => handlePartChange("server")}>Back-end</div>
                </div>
                {/* <div className='part-box'> */}
                    {/* <div className={`part-subtitle ${part === 'web' ? 'active-part' : ''}`} onClick={() => handlePartChange("web")}>웹</div> */}
                    {/* <div className={`part-subtitle ${part === 'server' ? 'active-part' : ''}`} onClick={() => handlePartChange("server")}>서버</div> */}
                {/* </div> */}
                <PartTable part={part} setPart={setPart}/>
            </div>
            </div>

    );
};

export default Part;