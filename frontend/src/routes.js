import { Navigate } from 'react-router-dom';

// default layout
import AppLayout from 'layouts/Layout';
import Analytics from './pages/dashboard/Analytics';

// auth pages
import AuthLogin from 'pages/auth/LoginPage';
import AuthRegister from 'pages/auth/RegisterPage';
import AuthForgotPassword from 'pages/auth/ForgotPasswordPage';

const routes = [
  {
    element: <AppLayout />,
    children: [
      {
        path: '/dashboard/default',
        element: <Analytics />
      }
    ]
  },

  { path: '/auth/login', element: <AuthLogin /> },
  { path: '/auth/register', element: <AuthRegister /> },
  { path: '/auth/forgot-password', element: <AuthForgotPassword /> },
  { path: '/', element: <Navigate to="dashboard/default" /> }
];

export default routes;
