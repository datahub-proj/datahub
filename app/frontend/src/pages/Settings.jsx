import React from "react";
import withAuth from "components/common/WithAuth";

const Settings = () => {
  return <div>Settings</div>;
};

const ProtectedSettings = withAuth(Settings);

export default ProtectedSettings;
