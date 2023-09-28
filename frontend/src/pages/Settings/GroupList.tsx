import React, { useMemo } from 'react';
import Breadcrumb from '@/components/common/Breadcrumb';
import { column } from '../../features/Settings/group/data/column';
import { db } from '../../features/Settings/group/data/db';
import TableOne from '@/components/templates/Table/TableOne';

const GroupList: React.FC = () => {
  const columns = useMemo(() => column, []);
  return (
    <>
      <Breadcrumb pageTitle="Data Tables" />
      <div className="flex flex-col">
        <TableOne data={db} columns={columns} />
      </div>
    </>
  );
};

export default GroupList;
