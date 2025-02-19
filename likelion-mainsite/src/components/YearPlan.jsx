import './YearPlan.css';

const YearPlan = () => {
    return (
        <div className="schedule-container">
        <h1 className="schedule-title">연간 일정</h1>
        <div className="schedule-grid">
        <img src={"src\\assets\\yearlyplan.svg"} alt="yearlyplan" className="yearlyplan-img" />
        </div>
      </div>
    );
  };
export default YearPlan;
