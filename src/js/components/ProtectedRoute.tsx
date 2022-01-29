import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import SessionContext, { SessionType } from "../utils/session";

function ProtectedRoute({ children, auth }: { children: JSX.Element, auth?: (session: SessionType) => boolean }) {
  const session = React.useContext(SessionContext)
  let location = useLocation();

  if (auth && ! auth(session)) {
    return <Navigate to={session.isLoggedIn ? "/home" : "/login"} state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoute
