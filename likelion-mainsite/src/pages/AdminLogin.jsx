import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // 환경변수에서 관리자 계정 정보 가져오기
    const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

    // 입력값과 환경변수 비교
    if (email === adminEmail && password === adminPassword) {
      sessionStorage.setItem("isAuthenticated", "true"); 
      navigate("/admin");
    } else {
      alert("이메일 또는 비밀번호가 틀렸습니다.");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">관리자 로그인</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          className="login-input"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="login-input"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-button">로그인</button>
      </form>
    </div>
  );
};

export default AdminLogin;
