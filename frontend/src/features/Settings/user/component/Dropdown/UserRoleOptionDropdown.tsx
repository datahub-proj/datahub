// import Select from '@/components/headless-ui/Select';
import React, { useState, Fragment, useRef } from 'react';
import { roles } from '@/features/Settings/user/data/roles';
import { useOutClick } from '@/hooks/useOuterClick';

type UserRoleOptionDropdownProps = {
  userid: string;
  role: string;
};

const UserRoleOptionDropdown: React.FC<UserRoleOptionDropdownProps> = ({
  userid,
  role: userRole,
}: UserRoleOptionDropdownProps) => {
  const roles: string[] = ['ADMIN', 'READER', 'GUEST'];

  const [selectedRole, setSelectedPRole] = useState(userRole);
  const [modalOpen, setModalOpen] = useState(false);

  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleRoleChange = (e) => {
    setSelectedPRole(e.target.value);
    setModalOpen(true);
  };

  // 외부 영역 클릭 시 Modal Close
  useOutClick([modalRef], () => {
    if (modalOpen) {
      setModalOpen(false);
    }
  });

  return (
    <div>
      <div className="relative inline-block">
        <select
          value={selectedRole}
          onChange={(e) => {
            handleRoleChange(e);
          }}
          className="rounded border border-stroke bg-transparent px-1 py-1 text-sm outline-none focus:border-primary dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
        >
          {roles.map((role, roleIdx) => (
            <option
              key={roleIdx}
              value={role}
              defaultValue={role === userRole ? userRole : role}
            >
              {role}
            </option>
          ))}
        </select>
        {selectedRole !== userRole && modalOpen && (
          <div
            ref={modalRef}
            className="absolute bottom-full left-1/2 z-20 mb-3 w-max max-w-[500px] -translate-x-1/2 rounded-md bg-white drop-shadow-5 dark:bg-meta-4 $"
          >
            <span className="absolute -bottom-1.5 left-1/2 -z-10 h-4 w-4 -translate-x-1/2 rotate-45 rounded-sm bg-white dark:bg-meta-4"></span>

            <div className="flex p-2 rounded-md">
              <div className="py-4.5 px-5 text-center">
                <p className="font-medium">권한을 수정하길 원하십니까?</p>
              </div>
              <div className="flex items-center justify-center gap-4 mr-3">
                <button className="inline-block rounded bg-primary py-1 px-3 font-medium text-white hover:bg-opacity-90">
                  Save
                </button>
                <button
                  className="inline-block rounded bg-body py-1 px-3 font-medium text-white hover:bg-opacity-90"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserRoleOptionDropdown;
