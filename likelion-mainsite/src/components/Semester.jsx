import React from "react";
import Event from "./Event";
import "./Semester.css";

function SemesterBlock({ number, title, events }) {
  return (
    <div className="semester-block">
      <div className="semester-header">
        <div className="semester-text">
          <span className="semester-number">{number}</span>
          <span className="semester-title">{title}</span>
        </div>
      </div>

      <div className="event-list">
        {events.map((event, index) => (
          <Event key={index} event={event} />
        ))}
      </div>
    </div>
  );
}

export default SemesterBlock;
