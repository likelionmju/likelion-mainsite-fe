import React, { use, useEffect, useState } from "react";
import "./PartTable.css";

const PartTable = ({ part, setPart }) => {
  // const serverWeeks = [
  //   { week: 1, session: "Git & Github" },
  //   { week: 2, session: "Java (1) <br/> 초기설정 및 기초 개념" },
  //   { week: 3, session: "Java (2) 개념 마무리" },
  //   { week: 4, session: "Java (3) 심화" },
  //   { week: 5, session: "Spring (1) <br/> 초기설정 및 서버 개념" },
  //   { week: 6, session: "Spring (2) <br/> 스프링 기초 및 MVC 패턴" },
  //   { week: 7, session: "Spring (3) <br/> 스프링 심화 및 API" },
  //   { week: 8, session: "Spring (4) <br/> DB 설정 및 JPA" },
  //   { week: 9, session: "Spring (5) <br/> 게시판 CRUD " },
  //   { week: 10, session: "Spring (6) <br/> 게시판 CRUD 마무리" },
  //   { week: 11, session: "WEB-SERVER <br/> 크로스오버 1" },
  //   { week: 12, session: "WEB-SERVER <br/> 크로스오버 2" }
  // ]

  // const webWeeks = [
  //   { week: 1, session: "Git & Github" },
  //   { week: 2, session: "HTML, CSS" },
  //   { week: 3, session: "Javascript (1) 기초" },
  //   { week: 4, session: "Javascript (2) 심화" },
  //   { week: 5, session: "Javascript (3) <br/> 로그인 구현 및 Toyproject" },
  //   { week: 6, session: "React (1) <br/> React 기초 및 피그마(Figma)" },
  //   { week: 7, session: "React (2) React Hooks" },
  //   { week: 8, session: "React (3) <br/> Routing 및 Styling(Tailwind)" },
  //   { week: 9, session: "React (4) <br/> Toyproject (감정일기장)" },
  //   { week: 10, session: "React (5) <br/> Toyproject (감정일기장) 마무리" },
  //   { week: 11, session: "WEB-SERVER <br/> 크로스오버 1" },
  //   { week: 12, session: "WEB-SERVER <br/> 크로스오버 2" }
  // ]

  const serverWeeks = [
    { week: 1, session: "Git & Github" },
    { week: 2, session: "Java (1) 초기 설정 및 기초 개념" },
    { week: 3, session: "Java (2) 개념 마무리" },
    { week: 4, session: "Java (3) 심화" },
    { week: 5, session: "Spring (1) 초기 설정 및 서버 개념" },
    { week: 6, session: "Spring (2) 스프링 기초 및 MVC 패턴" },
    { week: 7, session: "Spring (3) 스프링 심화 및 API" },
    { week: 8, session: "Spring (4) DB 설정 및 JPA" },
    { week: 9, session: "Spring (5) 게시판 CRUD" },
    { week: 10, session: "Spring (6) 게시판 CRUD 마무리" },
    { week: 11, session: "WEB-SERVER 크로스오버 1" },
    { week: 12, session: "WEB-SERVER 크로스오버 2" }
]

const webWeeks = [
    { week: 1, session: "Git & Github" },
    { week: 2, session: "HTML, CSS" },
    { week: 3, session: "Javascript (1) 기초" },
    { week: 4, session: "Javascript (2) 심화" },
    { week: 5, session: "Javascript (3) 로그인 구현 및 Toyproject" },
    { week: 6, session: "React (1) React 기초 및 피그마(Figma)" },
    { week: 7, session: "React (2) React Hooks" },
    { week: 8, session: "React (3) Routing 및 Styling(Tailwind)" },
    { week: 9, session: "React (4) Toyproject (감정일기장)" },
    { week: 10, session: "React (5) Toyproject (감정일기장) 마무리" },
    { week: 11, session: "WEB-SERVER 크로스오버 1" },
    { week: 12, session: "WEB-SERVER 크로스오버 2" }
]


  const [partWeeks, setPartWeeks] = useState(part === "web" ? webWeeks : serverWeeks);

  useEffect(() => {
    setPartWeeks(part === "web" ? webWeeks : serverWeeks);
  }
  , [part]);

  return (
    <>
    <div className="part-table-container part-desktop">
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
    <div className="part-table-container part-mobile">
      {/* 왼쪽 (1~8주차) */}
      <div className="part-table">
        <table>
          <tbody>
            {partWeeks.map(({ week, session }) => (
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
    </>
  );
};

export default PartTable;
