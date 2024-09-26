import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, allowedRoles, ...rest }) => {
  const token = localStorage.getItem('accessToken');  // Get the token from localStorage
  const userRole = localStorage.getItem('role');      // Get the user's role from localStorage

  // If no token exists, redirect to login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // If user's role does not match any allowed roles, redirect to home or unauthorized
  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/" replace />;
  }

  // Render the component
  return <Component {...rest} />;
};

export default ProtectedRoute;
