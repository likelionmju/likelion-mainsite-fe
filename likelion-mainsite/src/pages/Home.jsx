import React, { useEffect, useState, useRef } from "react";
import Footer from "@/components/Footer";
import "./Home.css";
import YearPlan from "@/components/YearPlan";
import character from "/public/character4.svg";
import Part from "@/components/Part";
import Schedule from "@/components/Schedule";
import Banner from "@/components/Banner.jsx";
import Introduction from "@/components/Introduction";

const Home = () => {
  const [visibleSections, setVisibleSections] = useState({
    intro: false,
    part: false,
    yearPlan: false,
    schedule: false,
  });

  const introRef = useRef(null);
  const partRef = useRef(null);
  const yearPlanRef = useRef(null);
  const scheduleRef = useRef(null);

  useEffect(() => {
    const sections = [
      { ref: introRef, key: "intro" },
      { ref: partRef, key: "part" },
      { ref: yearPlanRef, key: "yearPlan" },
      { ref: scheduleRef, key: "schedule" },
    ];

    const observerOptions = {
      root: null, // 뷰포트를 기준으로 감지
      threshold: 0.2, // 20% 이상 보여야 감지
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetElement = entry.target; // 👈 entry.target을 별도 변수에 저장
          if (targetElement instanceof HTMLElement) { // 👈 dataset을 안전하게 사용하기 위한 체크
            setVisibleSections((prev) => ({
              ...prev,
              [targetElement.dataset.section]: true, // 🎯 dataset.section 오류 해결!
            }));
          }
        }
      });
    }, observerOptions);
    

    sections.forEach(({ ref, key }) => {
      if (ref.current) {
        ref.current.dataset.section = key; // 데이터 속성 추가
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect(); // 컴포넌트 언마운트 시 Observer 해제
  }, []);

  return (
    <div className="Home">
      <Banner character={character} />

      <div ref={introRef} className={`section fade-in ${visibleSections.intro ? "visible" : ""}`}>
        <Introduction />
      </div>

      <div ref={partRef} className={`section fade-in ${visibleSections.part ? "visible" : ""}`}>
        <Part />
      </div>

      <div ref={yearPlanRef} className={`section fade-in ${visibleSections.yearPlan ? "visible" : ""}`}>
        <YearPlan />
      </div>

      <div ref={scheduleRef} className={`section fade-in ${visibleSections.schedule ? "visible" : ""}`}>
        <Schedule />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
