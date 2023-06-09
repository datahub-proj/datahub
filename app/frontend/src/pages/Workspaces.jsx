import React from "react";
import withAuth from "components/common/WithAuth";

const Workspaces = () => {
  return <div>Workspaces</div>;
};

const ProtectedWorkspaces = withAuth(Workspaces);

export default ProtectedWorkspaces;
