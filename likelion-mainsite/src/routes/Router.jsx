import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import RecruitPage from '@/pages/Recruit';
// import DefaultLayout from '@/components/layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<DefaultLayout />}> */}
        <Route path="/" element={<Home />} />
        <Route path="/recruit" element={<RecruitPage />} />
        <Route path="/login" element={<Login />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
