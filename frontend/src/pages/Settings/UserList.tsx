import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import UserListTable from '@/features/Settings/user/component/Table/UserListTable';
import { column } from '@/features/Settings/user/data/column';
import { db } from '@/features/Settings/user/data/db';

const UserList: React.FC = () => {
  return (
    <>
      <Breadcrumb
        pageTitle="사용자 목록"
        routeSegments={[
          { name: '설정', path: 'settings/' },
          { name: '사용자' },
        ]}
      />

      <div className="flex flex-col gap-5 md:gap-7 2xl:gap-10">
        <UserListTable data={db} columns={column} />
      </div>
    </>
  );
};

export default UserList;
