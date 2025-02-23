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
                <div className='part-box'>
                    <div className={`part-subtitle ${part === 'web' ? 'active-part' : ''}`} onClick={() => handlePartChange("web")}>웹</div>
                    <div className={`part-subtitle ${part === 'server' ? 'active-part' : ''}`} onClick={() => handlePartChange("server")}>서버</div>
                </div>
                <PartTable part={part} setPart={setPart}/>
            </div>

            {part === 'web' && (
                <PartExp
                    content={`웹(프론트엔드)에선
                        사용자가 인터넷을 통해 정보를 보고, 입력하고, 요청하는 역할을 합니다.
                        사용자 인터페이스(UI)를 제공하고, 사용자의 요청을 서버로 전송하고,
                        서버에서 받아온 데이터를 화면에 표시합니다.`
                    }
                />
            )}
            {part === 'server' && (
                <PartExp
                    content={`서버(백엔드)에선
                        웹의 요청을 받고, 처리하고, 응답하는 역할을 합니다.
                        웹에서 요청을 보내면 데이터를 저장하거나 불러오고,
                        처리한 데이터를 웹에 보내줍니다.`
                    }
                />
            )}
        </div>
    );
};

export default Part;