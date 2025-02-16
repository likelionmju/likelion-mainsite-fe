import React from "react";
import "./PartTable.css";

const PartTable = ({ weeks }) => {
  return (
    <div className="part-table-container">
      {/* 왼쪽 (1~8주차) */}
      <div className="part-table part-table-left">
        <table>
          <tbody>
            {weeks.slice(0, 8).map(({ week, session }) => (
              <tr key={week}>
                <td className="part-week">week {week}</td>
                <td className="part-session">{session}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 오른쪽 (9~16주차) */}
      <div className="part-table part-table-right">
        <table>
          <tbody>
            {weeks.slice(8, 16).map(({ week, session }) => (
              <tr key={week}>
                <td className="part-week">week {week}</td>
                <td className="part-session">{session}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PartTable;
