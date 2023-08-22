import React from "react";
import withAuth from "components/common/WithAuth";

const UserManagment = () => {
  return <div>Users</div>;
};

const ProtectedUserManagement = withAuth(UserManagment);

export default ProtectedUserManagement;
