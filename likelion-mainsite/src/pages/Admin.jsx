import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import axiosInstance from '@/libs/api/instance';

const AdminPage = () => {
    const navigate = useNavigate();
    const [id, setId] = useState(""); // 입력한 ID 저장
    const [formData, setFormData] = useState(null); // 조회된 지원서 데이터 저장
    const [error, setError] = useState(""); // 에러 메시지 저장
    const [result, setResult] = useState(""); // 합불 여부 설정

    // 로그아웃 핸들러
    const handleLogout = () => {
        sessionStorage.removeItem("isAuthenticated");
        navigate("/adminlogin");
    };

    // 지원서 조회 핸들러
    const handleFetchForm = async () => {
        if (!id) {
            setError("ID를 입력하세요.");
            return;
        }

        try {
            setError(""); // 기존 에러 초기화
            const response = await axiosInstance.get(`/api/forms/id/${id}`);

            console.log("서버 응답:", response.data); // ✅ 디버깅용 로그 추가

            // 🔹 응답 상태 확인 (백엔드 응답 구조에 따라 수정)
            if (response.status === 200 && response.data.data) {
                setFormData(response.data.data);
                console.log(response.data);
            } else {
                setError("지원서를 불러올 수 없습니다.");
                console.log(response.data);
            }
        } catch (err) {
            setError("데이터 조회 중 오류가 발생했습니다.");
            console.error("errrr:", err);
        }
    };

    // 합불 여부 업데이트 핸들러
    const handleUpdateResult = async (passStatus) => {
        if (!formData) {
            setError("먼저 지원서를 조회하세요.");
            return;
        }

        try {
            setError("");
            const response = await axiosInstance.put(`/api/forms/update`, null, {
                params: {
                    studentId: formData.studentId,
                    result: passStatus, // true: 합격, false: 불합격
                },
            });

            if (response.data.status === 200) {
                alert("합불 상태가 업데이트되었습니다.");
                setFormData(response.data.data); // 새로운 데이터 반영
            } else {
                setError("합불 상태를 업데이트하지 못했습니다.");
            }
        } catch (err) {
            setError("합불 업데이트 중 오류가 발생했습니다.");
            console.error(err);
        }
    };

    return (
        <div>
            <h2>관리자 페이지</h2>

            {/* 지원서 ID 입력 필드 */}
            <div>
                <input
                    type="text"
                    placeholder="지원서 ID 입력"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <button onClick={handleFetchForm}>조회</button>
            </div>

            {/* 에러 메시지 출력 */}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {/* 지원서 데이터 출력 */}
            {formData && (
                <div>
                    <h3>지원서 정보</h3>
                    <p><strong>이름:</strong> {formData.name}</p>
                    <p><strong>학번:</strong> {formData.studentId}</p>
                    <p><strong>학과:</strong> {formData.department}</p>
                    <p><strong>전화번호:</strong> {formData.phone}</p>
                    <p><strong>이메일:</strong> {formData.email}</p>
                    <p><strong>군필 여부:</strong> {formData.militaryStatus}</p>
                    <p><strong>희망 직군:</strong> {formData.rolePreference}</p>
                    <p><strong>자기소개:</strong> {formData.selfIntroduction}</p>
                    <p><strong>학습 방법:</strong> {formData.learningApproach}</p>
                    <p><strong>팀워크 경험:</strong> {formData.teamworkExperience}</p>
                    <p><strong>참여 계획:</strong> {formData.participationPlan}</p>
                    <p><strong>기대하는 점:</strong> {formData.expectations}</p>
                    <p><strong>추가 문의:</strong> {formData.question}</p>
                    <p><strong>동의 여부:</strong> {formData.consent ? "예" : "아니오"}</p>
                    <p><strong>비밀 번호:</strong> {formData.queryNumber}</p>
                    <p><strong>합격 여부:</strong> {formData.passStatus !== null ? (formData.passStatus ? "합격" : "불합격") : "미정"}</p>

                    {/* 합불 여부 버튼 */}
                    <button onClick={() => handleUpdateResult(true)}>합격</button>
                    <button onClick={() => handleUpdateResult(false)}>불합격</button>
                </div>
            )}

            {/* 로그아웃 버튼 */}
            <button onClick={handleLogout}>로그아웃</button>
        </div>
    );
};

export default AdminPage;
