import React from 'react';
import './Part.css';
import PartTable from './PartTable';

const Part = () => {

    const weeks = [
        { week: 1, session: "JAVA 초기설정 및 기초 개념" },
        { week: 2, session: "JAVA 개념 마무리" },
        { week: 3, session: "JAVA 심화" },
        { week: 4, session: "Spring(1) 초기설정" },
        { week: 5, session: "Spring (2) 스프링 기초 및 MVC 패턴" },
        { week: 6, session: "Spring (3) 스프링 심화" },
        { week: 7, session: "Spring (4) DB 설정 및 JPA" },
        { week: 8, session: "Spring (5) 게시판 CRUD " },
        { week: 9, session: "Spring (6) 게시판 CRUD 마무리" },
        { week: 10, session: "WEB-SERVER 크로스오버 1" },
        { week: 11, session: "WEB-SERVER 크로스오버 2" },
        { week: 12, session: "로드밸런싱과 스케일링" },
        { week: 13, session: "Redis와 캐시 최적화" },
        { week: 14, session: "Kafka 및 비동기 메시징" },
        { week: 15, session: "서버 성능 모니터링 및 최적화" },
        { week: 16, session: "최종 프로젝트 발표" },
    ]

    return (
        <div className="part-container">
            <div className='part-title'>파트별 소개</div>
            <div className='part-box'>
                <div className='part-subtitle'>웹</div>
                <div className='part-subtitle'>서버</div>
            </div>
            <PartTable weeks={weeks}/>
        </div>
    );
};

export default Part;