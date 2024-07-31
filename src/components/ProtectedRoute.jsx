import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, isLoggedIn, onAttemptAccess }) => {
  if (!isLoggedIn) {
    onAttemptAccess();
    return null; // Don't render anything, since the modal will handle the login
  }
  return <Route element={element} />;
};

export default ProtectedRoute;
