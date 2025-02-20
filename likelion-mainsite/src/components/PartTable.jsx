import React, { use, useEffect, useState } from "react";
import "./PartTable.css";

const PartTable = ({ part, setPart }) => {
  const serverWeeks = [
    { week: 1, session: "공통 세션" },
    { week: 2, session: "JAVA <br/> 초기설정 및 기초 개념" },
    { week: 3, session: "JAVA 개념 마무리" },
    { week: 4, session: "JAVA 심화" },
    { week: 5, session: "Spring(1) 초기설정" },
    { week: 6, session: "Spring (2) <br/> 스프링 기초 및 MVC 패턴" },
    { week: 7, session: "Spring (3) <br/> 스프링 심화" },
    { week: 8, session: "Spring (4)<br/> DB 설정 및 JPA" },
    { week: 9, session: "Spring (5) <br/> 게시판 CRUD " },
    { week: 10, session: "Spring (6) <br/> 게시판 CRUD 마무리" },
    { week: 11, session: "WEB-SERVER <br/> 크로스오버 1" },
    { week: 12, session: "WEB-SERVER <br/> 크로스오버 2" }
  ]

  const webWeeks = [
    { week: 1, session: "공통 세션" },
    { week: 2, session: "HTML/CSS" },
    { week: 3, session: "HTML/CSS" },
    { week: 4, session: "JavaScript" },
    { week: 5, session: "JavaScript" },
    { week: 6, session: "React(1)" },
    { week: 7, session: "React(2)" },
    { week: 8, session: "React(3)" },
    { week: 9, session: "React(4)" },
    { week: 10, session: "React(5)" },
    { week: 11, session: "WEB-SERVER <br/> 크로스오버 1" },
    { week: 12, session: "WEB-SERVER <br/> 크로스오버 2" }
  ]

  const [partWeeks, setPartWeeks] = useState(part === "web" ? webWeeks : serverWeeks);

  useEffect(() => {
    setPartWeeks(part === "web" ? webWeeks : serverWeeks);
  }
  , [part]);

  return (
    <div className="part-table-container">
      {/* 왼쪽 (1~8주차) */}
      <div className="part-table">
        <table>
          <tbody>
            {partWeeks.slice(0, 6).map(({ week, session }) => (
              <tr key={week}>
                <td className="part-week">week {week}</td>
                <td className="part-session">{session.replace(/<br\/>/g, " ")}</td>
                <td className="part-session2" dangerouslySetInnerHTML={{ __html: session }}></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 오른쪽 (9~16주차) */}
      <div className="part-table">
        <table>
          <tbody>
            {partWeeks.slice(6, 13).map(({ week, session }) => (
              <tr key={week}>
                <td className="part-week">week {week}</td>
                <td className="part-session">{session.replace(/<br\/>/g, " ")}</td>
                <td className="part-session2" dangerouslySetInnerHTML={{ __html: session }}></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PartTable;
