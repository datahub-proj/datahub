import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

const withAuth = (Component) => {
  const AuthenticatedComponent = (props) => {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
      // Check if the user is logged in
      if (!user.loggedIn) {
        navigate("/login"); // Redirect to login page if not logged in
      }
    }, [user.loggedIn, navigate]);

    // Render the protected component if the user is logged in
    return user.loggedIn ? <Component {...props} /> : null;
  };

  return AuthenticatedComponent;
};

export default withAuth;
