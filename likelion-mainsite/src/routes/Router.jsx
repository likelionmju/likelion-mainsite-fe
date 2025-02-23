import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import RecruitPage from '@/pages/Recruit';
import AdminLogin from '@/pages/AdminLogin';
import AdminPage from '@/pages/Admin';
import AdminRoute from './AdminRouter';
import CheckResult from '@/pages/CheckResult';
// import DefaultLayout from '@/components/layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<DefaultLayout />}> */}
        <Route path="/" element={<Home />} />
        <Route path="/recruit" element={<RecruitPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkresult" element={<CheckResult />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/*" element={<Home />} />
        
        {/* 관리자 전용 페이지 - AdminRoute로 보호 */}
        <Route element={<AdminRoute />}>
          <Route path="/admin" element={<AdminPage />} />
        </Route>
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
