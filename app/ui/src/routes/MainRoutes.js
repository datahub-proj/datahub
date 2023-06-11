// project import
import MainLayout from 'layout/MainLayout';
import Dashboard from 'pages/Dashboard';

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/dashboard',
      element: <Dashboard />
    }
  ]
};

export default MainRoutes;
