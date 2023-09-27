import React from 'react';

type EditUserRoleProps = {
  userid: string;
  role: string;
};

const EditUserRoleModal: React.FC<EditUserRoleProps> = ({
  userid,
  role,
}: EditUserRoleProps) => {
  return (
    <button className="inline-flex rounded-full border border-primary py-1 px-3 text-sm font-medium text-primary hover:opacity-80">
      {role}
    </button>
  );
};

export default EditUserRoleModal;
