import React from "react";
import { Navigate } from "react-router-dom";

function ProdectedRoute({ children }) {
  const acses_token = localStorage.getItem("acses_token");

  if (!acses_token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProdectedRoute;
