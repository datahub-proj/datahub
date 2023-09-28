import { ColumnDef, createColumnHelper } from '@tanstack/react-table';

import UserListOptionDropdown from '@/features/Settings/user/component/Dropdown/UserListOptionDropdown';
import UserRoleOptionDropdown from '@/features/Settings/user/component/Dropdown/UserRoleOptionDropdown';
import { Link } from 'react-router-dom';

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
      <Link to={`/user/${props.row.original.id}`}>
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
      </Link>
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
  columnHelper.accessor('email', {
    header: '채널',
    cell: (props) => (
      <div className="flex flex-wrap items-center gap-1.5">
        <button className="inline-flex items-center gap-3 rounded-md border py-2 px-2 border-stroke font-medium hover:border-primary hover:bg-primary/[0.08] hover:text-primary">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm3.519 0L12 11.671 18.481 6H5.52zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16V7.329z"
              fill="#0D0D0D"
            />
          </svg>
        </button>

        <button className="inline-flex items-center gap-3 rounded-md border py-2 px-2 border-stroke font-medium hover:border-primary hover:bg-primary/[0.08] hover:text-primary">
          <svg
            width="18"
            height="18"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <g fill-rule="evenodd" clip-rule="evenodd">
              <path
                fill="#E01E5A"
                d="M2.471 11.318a1.474 1.474 0 001.47-1.471v-1.47h-1.47A1.474 1.474 0 001 9.846c.001.811.659 1.469 1.47 1.47zm3.682-2.942a1.474 1.474 0 00-1.47 1.471v3.683c.002.811.66 1.468 1.47 1.47a1.474 1.474 0 001.47-1.47V9.846a1.474 1.474 0 00-1.47-1.47z"
              />

              <path
                fill="#36C5F0"
                d="M4.683 2.471c.001.811.659 1.469 1.47 1.47h1.47v-1.47A1.474 1.474 0 006.154 1a1.474 1.474 0 00-1.47 1.47zm2.94 3.682a1.474 1.474 0 00-1.47-1.47H2.47A1.474 1.474 0 001 6.153c.002.812.66 1.469 1.47 1.47h3.684a1.474 1.474 0 001.47-1.47z"
              />

              <path
                fill="#2EB67D"
                d="M9.847 7.624a1.474 1.474 0 001.47-1.47V2.47A1.474 1.474 0 009.848 1a1.474 1.474 0 00-1.47 1.47v3.684c.002.81.659 1.468 1.47 1.47zm3.682-2.941a1.474 1.474 0 00-1.47 1.47v1.47h1.47A1.474 1.474 0 0015 6.154a1.474 1.474 0 00-1.47-1.47z"
              />

              <path
                fill="#ECB22E"
                d="M8.377 9.847c.002.811.659 1.469 1.47 1.47h3.683A1.474 1.474 0 0015 9.848a1.474 1.474 0 00-1.47-1.47H9.847a1.474 1.474 0 00-1.47 1.47zm2.94 3.682a1.474 1.474 0 00-1.47-1.47h-1.47v1.47c.002.812.659 1.469 1.47 1.47a1.474 1.474 0 001.47-1.47z"
              />
            </g>
          </svg>
        </button>
        <button className="inline-flex items-center gap-3 rounded-md border py-2 px-2 font-medium border-stroke hover:border-primary hover:bg-primary/[0.08] hover:text-primary">
          <svg
            fill="#000000"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
          >
            <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" />
          </svg>
        </button>
      </div>
    ),
  }),
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
