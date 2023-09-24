import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

// Home
import Dashboard from './pages/Home/Dashboard';
import Announcement from './pages/Home/Announcement';
import Statistics from './pages/Home/Statistics';

// Data
import DataCatalog from './pages/Data/DataCatalog';
import TaskManagement from './pages/Data/TaskManagement';
import NewTaskEntry from './pages/Data/NewTaskEntry';
import TaskList from './pages/Data/TaskList';

// Platform
import JupyterHub from './pages/Platform/JupyterHub';

// System
import AlarmManagement from './pages/System/AlarmManagement';
import LogManagement from './pages/System/LogManagement';

// Settings
import UserList from './pages/Settings/UserList';
import GroupList from './pages/Settings/GroupList';
import Permissinon from './pages/Settings/Permissinon';

// Profile
import UserDetail from './pages/Profile/UserDetail';
import GroupDetail from './pages/Profile/GroupDetail';

// Authentication
import Signup from './pages/Authentication/Signup';
import SignIn from './pages/Authentication/SignIn';

export const routes = [
  {
    element: <DefaultLayout />,
    path: '/',
    children: [
      // Home
      {
        path: '/home/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/home/announcement',
        element: <Announcement />,
      },
      {
        path: '/home/statistics',
        element: <Statistics />,
      },
      // Data
      {
        path: '/data/data-catalog',
        element: <DataCatalog />,
      },
      {
        path: '/data/data-pipeline/tasks',
        element: <TaskManagement />,
      },
      {
        path: '/data/data-pipeline/new',
        element: <NewTaskEntry />,
      },
      {
        path: '/data/data-pipeline/all',
        element: <TaskList />,
      },
      {
        path: '/platform/jupyterhub',
        element: <JupyterHub />,
      },
      {
        path: '/system/log',
        element: <LogManagement />,
      },
      {
        path: '/system/notification',
        element: <AlarmManagement />,
      },

      // Settings
      {
        path: '/settings/users',
        element: <UserList />,
      },
      {
        path: '/settings/groups',
        element: <GroupList />,
      },
      {
        path: '/settings/permissions',
        element: <Permissinon />,
      },
      // Profile
      {
        path: '/user/:id',
        element: <UserDetail />,
      },
      {
        path: '/group/:id',
        element: <GroupDetail />,
      },
    ],
  },

  // Auth
  { path: '/auth/signup', element: <Signup /> },
  { path: '/auth/signin', element: <SignIn /> },

  // Default Page
  { path: '/', element: <Navigate to="/dashboard" /> },
  { path: '/settings', element: <Navigate to="/settings/users" /> },
  { path: '/data', element: <Navigate to="/data/data-pipeline/tasks" /> },
  { path: '/system', element: <Navigate to="/system/log" /> },
];
