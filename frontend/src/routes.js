import { Navigate } from 'react-router-dom';

// default layout
import AppLayout from 'layouts/Layout';
import Dashboard from 'pages/home/Dashboard';

// Home
import Announcement from 'pages/home/Announcement';
import Statistics from 'pages/home/Statistics';

// Data
// Data Catalog
import DataCatalogPage from 'pages/data/data-catalog/DataCatalogPage';
// Data Pipeline
import JobsPage from 'pages/data/data-pipeline/JobsPage';
import NewJobEntryPage from 'pages/data/data-pipeline/NewJobEntryPage';
import MyJobEntryPage from 'pages/data/data-pipeline/MyJobEntryPage';
import AllJobEntryPage from 'pages/data/data-pipeline/AllJobEntryPage';

// Platform
import JupyterHubPage from 'pages/platform/JupyterHubPage';

// System
import LogPage from 'pages/system/LogPage';
import NotificationPage from 'pages/system/NotificationPage';

// settings
import UserListPage from 'pages/settings/UserListPage';
import PermissionPage from 'pages/settings/PermissionPage';
import RolesPage from 'pages/settings/RolesPage';

// Auth pages
import LoginPage from 'pages/auth/LoginPage';
import RegisterPage from 'pages/auth/RegisterPage';
import ForgotPasswordPage from 'pages/auth/ForgotPasswordPage';
import GroupListPage from 'pages/settings/GroupListPage';

const routes = [
  {
    element: <AppLayout />,
    children: [
      // Home
      {
        path: '/home/dashboard',
        element: <Dashboard />
      },
      {
        path: '/home/announcement',
        element: <Announcement />
      },
      {
        path: '/home/statistics',
        element: <Statistics />
      },
      // Data
      {
        path: '/data-catalog',
        element: <DataCatalogPage />
      },
      {
        path: '/data-pipeline/jobs',
        element: <JobsPage />
      },
      {
        path: '/data-pipeline/new',
        element: <NewJobEntryPage />
      },
      {
        path: '/data-pipeline/me',
        element: <MyJobEntryPage />
      },
      {
        path: '/data-pipeline/all',
        element: <AllJobEntryPage />
      },
      {
        path: '/platform/jupyterhub',
        element: <JupyterHubPage />
      },
      {
        path: '/system/log',
        element: <LogPage />
      },
      {
        path: '/system/notification',
        element: <NotificationPage />
      },

      // Settings
      {
        path: '/settings/users',
        element: <UserListPage />
      },
      {
        path: '/settings/groups',
        element: <GroupListPage />
      },
      {
        path: '/settings/permissions',
        element: <PermissionPage />
      },
      {
        path: '/settings/permissions/roles',
        element: <RolesPage />
      }
    ]
  },

  { path: '/auth/login', element: <LoginPage /> },
  { path: '/auth/register', element: <RegisterPage /> },
  { path: '/auth/forgot-password', element: <ForgotPasswordPage /> },
  { path: '/', element: <Navigate to="home/dashboard" /> }
];

export default routes;
