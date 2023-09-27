import { ColumnDef, createColumnHelper } from '@tanstack/react-table';

import UserListOptionDropdown from '@/features/Settings/user/component/Dropdown/UserListOptionDropdown';
import UserRoleOptionDropdown from '@/features/Settings/user/component/Dropdown/UserRoleOptionDropdown';

// Data Type

export type User = {
  id: string;
  name: string;
  nickname: string;
  email: string;
  imageUrl: string;
  team: string;
  position: string;
  role: string;
};

// Column

const columnHelper = createColumnHelper<User>();

export const column: ColumnDef<User, string>[] = [
  columnHelper.accessor('name', {
    header: '멤버',
    cell: (props) => (
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <img
            className="w-10 h-10 rounded-full "
            src={props.row.original.imageUrl}
            alt="User"
          />
        </div>
        <div className="p-1.5 m-1">
          <p className="font-medium text-black dark:text-white">
            {`${props.getValue()}`}
          </p>
          <p className="text-sm">{props.row.original.nickname}</p>
        </div>
      </div>
    ),
  }),
  columnHelper.accessor('team', {
    header: '소속',
    cell: (props) => (
      <div className="flex items-center">
        <div className="p-1.5 m-1">
          <p className="font-medium text-black dark:text-white">
            {`${props.getValue()}`}
          </p>
          <p className="text-sm">{props.row.original.position}</p>
        </div>
      </div>
    ),
  }),
  columnHelper.accessor('email', { header: '이메일' }),
  columnHelper.accessor('role', {
    header: '권한',
    cell: (props) => (
      <UserRoleOptionDropdown
        userid={props.row.original.id}
        role={props.getValue()}
      />
    ),
  }),
  columnHelper.accessor('id', {
    header: '',
    cell: (props) => (
      <div className="flex justify-center items-center">
        <UserListOptionDropdown userid={props.getValue()} />
      </div>
    ),
  }),
];
