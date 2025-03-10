import { useNavigate } from 'react-router-dom';
import './Apply.css';
import React from 'react';

const Apply = () => {
    const navigate = useNavigate();

    const handleApply = () => {
        navigate('/result');
    };

    return (
        <div className='apply-container'>
            <button className="apply-btn" onClick={handleApply}>13기 서류 합격 확인하러 가기</button>
        </div>
    );
};

export default Apply;