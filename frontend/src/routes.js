import { Navigate } from "react-router-dom";

// default layout
import AppLayout from "./components/AppLayout/AppLayout";
import Analytics from "./pages/dashboard/Analytics";

// auth pages
import Login from "pages/auth/Login";
import Register from "pages/auth/Register";
import ForgotPassword from "pages/auth/ForgotPassword";

const routes = [
  {
    element: <AppLayout />,
    children: [
      {
        path: "/dashboard/default",
        element: <Analytics />,
      },
    ],
  },

  { path: "/auth/login", element: <Login /> },
  { path: "/auth/register", element: <Register /> },
  { path: "/auth/forgot-password", element: <ForgotPassword /> },
  { path: "/", element: <Navigate to="dashboard/default" /> },
];

export default routes;
