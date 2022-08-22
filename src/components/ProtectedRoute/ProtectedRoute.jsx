import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setLoggedIn] = useState(true);
  useEffect(() => {
    (async () => {
      let user = null;

      try {
        user = await Auth.currentAuthenticatedUser();
        if (user) {
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
