import React from "react";
import './Schedule.css';

const Schedule = () => {
    return (
            <div className="recruit_date" >
            <div className="recruit_date_title">모집 일정</div>
            <div className="recruit_date_div">
                <div>
                    <p className="recruit_date_content_bold">02/26 - 03/09</p>
                    <div className="recruit_date_box">
                        서류전형
                    </div>
                </div>
                <div>
                    <p className="recruit_date_content_bold">03/10</p>
                    <div className="recruit_date_box">
                        서류 합격 발표
                    </div>
                </div>
                <div>
                    <p className="recruit_date_content_bold">03/12 - 03/14</p>
                    <div className="recruit_date_box">
                        면접 전형
                    </div>
                </div>
                <div>
                    <p className="recruit_date_content_bold">03/15</p>
                    <div className="recruit_date_box">
                        최종 합격 발표
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedule;
