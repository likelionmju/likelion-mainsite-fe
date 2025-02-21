import React, { useState } from "react";
import axios from "axios";
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import Button from '@/components/Button.jsx';
import './CheckResult.css';
import axiosInstance from '@/libs/api/instance';

const CheckResult = () => {
  const [queryNumber, setQueryNumber] = useState(""); // 사용자 입력 쿼리번호
  const [resultData, setResultData] = useState(null); // 조회된 결과 데이터
  const [error, setError] = useState(""); // 에러 메시지

  // 합불 여부 조회 핸들러
  const handleCheckResult = async () => {
    if (!queryNumber) {
      setError("쿼리 번호를 입력해주세요.");
      return;
    }

    try {
      setError(""); // 기존 에러 초기화
      const response = await axiosInstance.get(`/api/forms/result`, {
        params: { queryNumber },
      });

      if (response.data.status === 200) {
        setResultData(response.data.data);
      } else {
        setError("합불 여부를 확인할 수 없습니다.");
      }
    } catch (err) {
      setError("조회 중 오류가 발생했습니다.");
      console.error(err);
    }
  };

  return (
    <div className="page-container">
      <Header />
      <div className="result-box-wrapper">
        <h2 style={{ color: "white", fontSize: "40px", fontWeight: "bold" }} className="result-description">합불 여부 확인</h2>

        {/* 쿼리번호 입력 필드 */}
        <div className="result-input-container">
          <input
            type="text"
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

        {/* 조회 결과 출력 */}
        {resultData && (
          <div className="result-container">
            <h3>결과 확인</h3>
            <p><strong>이름:</strong> {resultData.name}</p>
            <p>
              <strong>합격 여부:</strong> 
              {resultData.passStatus === null 
                ? "미정" 
                : resultData.passStatus 
                  ? "✅ 합격" 
                  : "❌ 불합격"}
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CheckResult;

  