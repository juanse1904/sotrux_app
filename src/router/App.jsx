import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Amplify from 'aws-amplify';
import Layout from '../components/layout/Layout';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import WorkTable from '../containers/workTable';
import Login from '../containers/login/Login';
import UserConfirmation from '../containers/userConfirmation/UserConfirmation';
import ValidationError from '../containers/validationError/validationError';
import ValidationSuccess from '../containers/validationSuccess/validationSuccess';
import ValidationResend from '../containers/validationResend/validationResend';
import Home from '../containers/Home';
import './index.css';

Amplify.configure({
  aws_cognito_region: process.env.AWS_REGION,
  aws_user_pools_id: process.env.AWS_USER_POOL_ID,
  aws_user_pools_web_client_id: process.env.AWS_APP_CLIENT_ID,
});

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/user-confirmation" element={<UserConfirmation />} />
      <Route path="/validation-error" element={<ValidationError />} />
      <Route path="/validation-success" element={<ValidationSuccess />} />
      <Route path="/resend-code-confirmation" element={<ValidationResend />} />
      <Route
        path="/:workWin"
        element={(
          <ProtectedRoute>
            <Layout>
              <WorkTable />
            </Layout>
          </ProtectedRoute>
        )}
      />
      <Route
        path="/"
        element={(
          <ProtectedRoute>
            <Layout>
              <Home />
            </Layout>
          </ProtectedRoute>
        )}
      />
    </Routes>
  </BrowserRouter>
);

export default App;
