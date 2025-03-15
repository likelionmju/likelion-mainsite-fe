import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axiosInstance from "@/libs/api/instance";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import "./CheckResult.css";

const CheckResult = () => {
  const navigate = useNavigate();
  const [studentId, setStudentId] = useState(""); 
  const [queryNumber, setQueryNumber] = useState(""); 
  const [resultData, setResultData] = useState(null); 
  const [error, setError] = useState(""); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTimeRestricted, setIsTimeRestricted] = useState(false);

  const startTime = new Date("2025-03-15T18:10:00");
  const endTime = new Date("2025-12-31T23:59:59");

  useEffect(() => {
    const now = new Date();
    if (now < startTime || now > endTime) {
      setIsTimeRestricted(true);
      setIsModalOpen(true);
    }
  }, []);

  // 합불 여부 조회 핸들러
  const handleCheckResult = async () => {
    if (!studentId || !queryNumber) {
      setError("학번과 비밀번호를 모두 입력해주세요.");
      return;
    }

    try {
      setError(""); // 기존 에러 초기화
      const response = await axiosInstance.get(`/api/forms/result`, {
        params: { studentId, queryNumber },
      });

      if (response.data.status === 200) {
        setResultData(response.data.data);
      } else {
        setError("합불 여부를 확인할 수 없습니다.");
      }
    } catch (err) {
      setError("제출되지 않은 데이터입니다.");
      console.error(err);
    }
    setIsModalOpen(true);
  };

  return (
    <div className="page-container">
      <Header />
        <div className="result-box-wrapper">
          <h2 className="result-description">면접 전형 결과 확인</h2>

          {/* 학번 및 비밀번호 입력 필드 */}
          <div className="result-input-container">
            <input
              type="text"
              placeholder="본인의 학번을 입력해주세요"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            />
            <input
              type="password"
              placeholder="설정하셨던 네자리 비밀번호를 입력해주세요"
              value={queryNumber}
              onChange={(e) => setQueryNumber(e.target.value)}
            />
            <button type="submit" onClick={handleCheckResult} className="result-button">
              조회하기
            </button>
          </div>

          {/* 에러 메시지 출력 */}
          {error && <p className="error-message">{error}</p>}

          {/* 결과 출력 */}
          {resultData && (
            <div className="result-container">
              <h3>결과 확인</h3>
              <p><strong>이름 :</strong> {resultData.name}</p>
              <p>
                <strong>합격 여부 : </strong> 
                {resultData.passStatus 
                    ? " ✅ 합격 - 13기 아기사자로 함께 하게 되신 걸 진심으로 환영합니다 🦁🧡" 
                    : " ❌ 불합격 - 아쉬운 소식을 전해드리게 되어 매우 유감입니다 😢 지원자분의 역량은 매우 뛰어나나 지원자 수가 많아 미세한 차이로 다른 분께 합격 소식을 전해드리게 되었습니다. 명지대학교 멋쟁이사자처럼에 관심 가져주시고 지원해주셔서 다시 한 번 정말 감사드리며 14기 지원 때 다시 뵙기를 고대하겠습니다 🙇🏻‍♀️"}
              </p>
            </div>
          )}
        </div>
      {/* 시간 제한 모달 */}
      {isModalOpen && isTimeRestricted && (
        <div className="modal-overlay">
        <div className="modal-content">
          <div className="modal-body">
            <div className="modal-title">⚠️ 조회 불가 시간</div>
            <div className="modal-message">
              최종 합격여부는 금일 18:00 이후 확인 가능합니다 🙂
            </div>
          </div>
          <div className="modal-actions">
            <button className="submit-btn" onClick={() => navigate("/")}>
              확인
            </button>
          </div>
        </div>
      </div>
      )}
      <Footer />
    </div>
  );
};

export default CheckResult;
