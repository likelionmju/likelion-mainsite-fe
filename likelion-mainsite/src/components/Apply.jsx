import { useNavigate } from 'react-router-dom';
import './Apply.css';
import React from 'react';

const Apply = () => {
    const navigate = useNavigate();

    const handleApply = () => {
        navigate('/recruit');
    };

    return (
        <div>
            <button onClick={handleApply}>13기 지원하러 가기</button>
        </div>
    );
};

export default Apply;