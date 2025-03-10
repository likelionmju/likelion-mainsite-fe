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
      root: null, 
      threshold: 0.2, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetElement = entry.target; 
          if (targetElement instanceof HTMLElement) { 
            setVisibleSections((prev) => ({
              ...prev,
              [targetElement.dataset.section]: true,
            }));
          }
        }
      });
    }, observerOptions);
    

    sections.forEach(({ ref, key }) => {
      if (ref.current) {
        ref.current.dataset.section = key; 
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect(); 
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
