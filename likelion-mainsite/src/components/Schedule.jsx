import './Schedule.css';
import React from 'react';

const Button = () => {
	return (
        <div className="recruit_date">
        <p className="recruit_date_title">모집 일정</p>
        <div className="recruit_date_div">
                <div>
                    <p className="recruit_date_content_bold">02/26 - 03/09</p>
                    <div className="recruit_date_box">
                        <span className="recruit_date_content_medium">서류 전형</span>
                    </div>
                </div>
                <div>
                    <p className="recruit_date_content_bold">03/10</p>
                    <div className="recruit_date_box">
                        <span className="recruit_date_content_medium">서류 합격 발표</span>
                    </div>
                </div>
                <div>
                    <p className="recruit_date_content_bold">03/12 - 03/14</p>
                    <div className="recruit_date_box">
                        <span className="recruit_date_content_medium">면접 전형</span>
                    </div>
                </div>
                <div>
                    <p className="recruit_date_content_bold">03/15</p>
                    <div className="recruit_date_box">
                        <span className="recruit_date_content_medium">최종 합격 발표</span>
                    </div>
                </div>
        </div>
    </div>
	);
};

export default Button;
