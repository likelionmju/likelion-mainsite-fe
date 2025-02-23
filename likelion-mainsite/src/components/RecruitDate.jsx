import './RecruitDate.css';
import React from 'react';

const RecruitDate = (props) => {
    return (
        <div className="recruit_date_container">
            <p className="recruit_date_content_bold">{props.content_bold}</p>
            <div className="recruit_date_box">
                <span className="recruit_date_content_medium">{props.content_medium}</span>
                <span className="recruit_date_content_light">{props.content_light}</span>
            </div>
        </div>
    );
};

export default RecruitDate;