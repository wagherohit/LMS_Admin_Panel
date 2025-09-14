// components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const user = sessionStorage.getItem('userData');

  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
