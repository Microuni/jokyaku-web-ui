import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import SessionContext from "../utils/session";

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const session = React.useContext(SessionContext)
  let location = useLocation();

  if (!session.isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoute
