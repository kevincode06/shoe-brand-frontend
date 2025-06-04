import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const ProtectedRoute = ({ children, allowedBrands = [], allowedRoles = [] }) => {
  const { user } = useContext(AuthContext);

  // Not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Normalize user role and brand to lowercase strings
  const userRole = user.role?.toLowerCase() || '';
  const userBrand = user.brand?.toLowerCase() || '';

  // Normalize allowed roles and brands to lowercase for case-insensitive comparison
  const allowedBrandsNormalized = allowedBrands.map(b => b.toLowerCase());
  const allowedRolesNormalized = allowedRoles.map(r => r.toLowerCase());

  const isBrandAllowed = allowedBrands.length === 0 || allowedBrandsNormalized.includes(userBrand);
  const isRoleAllowed = allowedRoles.length === 0 || allowedRolesNormalized.includes(userRole);

  // Not allowed
  if (!isBrandAllowed || !isRoleAllowed) {
    return <Navigate to="/unauthorized" replace />;
  }

  // Allowed
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
