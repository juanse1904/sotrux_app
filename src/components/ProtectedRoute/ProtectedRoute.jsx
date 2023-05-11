import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { isLogged } from '../../aws-utils/aws-utils';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setLoggedIn] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const user = await isLogged();
        console.log('checking loggedin', user);
        if (user.data) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      } catch (e) {
        setLoggedIn(false);
      }
    })();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
