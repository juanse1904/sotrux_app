import React, { useEffect, useState } from "react";
import { isLogged } from "../../aws-utils/aws-utils";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setLoggedIn] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const user = isLogged();
        if (user.data) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      } catch (e) {
        setLoggedIn(false);
      }
    })();
  });

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
