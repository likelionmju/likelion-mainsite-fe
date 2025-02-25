import React from "react";
import Semester from "./Semester";
import "./YearPlan.css"; 

function YearPlan() {
  const scheduleData = [
    { 
      number: 1, title: "1학기", events: ["OT 및 친목행사", "아이디어톤 (필참)", "정기세션"] 
    },
    { 
      number: 2, title: "여름방학", events: ["중앙 해커톤 (필참)", "MT"] 
    },
    { 
      number: 3, title: "2학기", events: ["연합 해커톤", "연합 컨퍼런스"] 
    },
    { 
      number: 4, title: "겨울방학", events: ["데모데이", "수료"] 
    }
  ];

  return (

    <div className="yearly-plan">
        <div className="title-text">연간 일정</div>
        <div className="semester-wrapper">
          <div className="semester">
          {scheduleData.map((semester, index) => (
              <Semester key={index} number={semester.number} title={semester.title} events={semester.events} />
          ))}
          </div>
        </div>
    </div>
  );
}

export default YearPlan;
