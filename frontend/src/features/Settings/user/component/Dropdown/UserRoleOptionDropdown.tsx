import Select from '@/components/headless-ui/Select';
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

type UserRoleOptionDropdownProps = {
  userid: string;
  role: string;
};

const UserRoleOptionDropdown: React.FC<UserRoleOptionDropdownProps> = ({
  userid,
  role,
}: UserRoleOptionDropdownProps) => {
  const roles = [
    {
      id: '1',
      label: 'GUEST',
      value: 'GUEST',
    },
    {
      id: '2',
      label: 'JPEG',
      value: 'jpeg',
    },
    {
      id: '3',
      label: 'WEBP',
      value: 'webp',
    },
  ];

  const initialUserRole = roles.find((ext) => ext.value == role);

  const [userRole, setUserRole] = useState(initialUserRole);

  console.log(userRole);
  return (
    <div className="w-full max-w-xs mx-auto">
      <Select
        options={roles}
        selectedOption={userRole}
        handleChange={(selectedOption) => {
          setUserRole(selectedOption);
        }}
      />
    </div>
  );
};

export default UserRoleOptionDropdown;
