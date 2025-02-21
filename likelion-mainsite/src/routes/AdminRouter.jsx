import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {
  const isAuthenticated = sessionStorage.getItem("isAuthenticated");

  return isAuthenticated ? <Outlet /> : <Navigate to="/adminlogin" />;
};

export default AdminRoute;
