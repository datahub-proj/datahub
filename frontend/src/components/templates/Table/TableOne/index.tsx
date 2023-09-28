import {
  getCoreRowModel,
  useReactTable,
  flexRender,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  FilterFn,
  ColumnDef,
} from '@tanstack/react-table';

import { useEffect, useState } from 'react';
import { DebouncedInput } from '../utils/DebounceInput';
import { fuzzyFilter } from '../utils/filterfns';

interface ReactTableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T, any>[];
  showFooter?: boolean;
  showNavigation?: boolean;
  showGlobalFilter?: boolean;
  filterFn?: FilterFn<T>;
}

// 동적으로 페이지네이션 범위를 계산하는 함수
const getPaginationRange = (
  pageCount: number,
  currentPage: number,
  maxVisiblePages: number = 10
): number[] => {
  const visiblePages: number[] = [];

  if (currentPage < 7) {
    const pageLimit = Math.min(pageCount, maxVisiblePages);
    for (let i = 0; i < pageLimit; i++) {
      visiblePages.push(i);
    }
  } else {
    // 좌우로 최대 5페이지 씩 표시
    const leftIdx = currentPage - 5;
    const rightIdx = Math.min(pageCount, currentPage + 5);

    for (let i = leftIdx; i < rightIdx; i++) {
      visiblePages.push(i);
    }
    visiblePages.unshift(-1);
    visiblePages.unshift(0);

    // 마지막 페이지는 ... 버튼을 추가하지 않음
    if (currentPage + 1 !== pageCount) {
      visiblePages.push(-1);
    }
  }

  return visiblePages;
};

const TableOne = <T extends object>({
  data,
  columns,
  showFooter = false,
  showNavigation = true,
  showGlobalFilter = true,
}: ReactTableProps<T>) => {
  const [globalFilter, setGlobalFilter] = useState('');
  const [visiblePages, setVisiblePages] = useState<number[]>([]);

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const pageCount = table.getPageCount();
  const currentPage = table.getState().pagination.pageIndex;
  const maxVisiblePages = 10; // 최대 표시 페이지 수

  useEffect(() => {
    // getPaginationButton 함수를 호출하여 visiblePages를 업데이트합니다.
    const newVisiblePages = getPaginationRange(
      pageCount,
      currentPage,
      maxVisiblePages
    );
    setVisiblePages(newVisiblePages);
  }, [pageCount, currentPage, maxVisiblePages]);

  return (
    <div className="rounded-sm border border-stroke bg-white p-10 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="data-table-common data-table-two max-w-full overflow-x-auto">
        <div className="datatable-top">
          {/* GlobalFilter */}
          {showGlobalFilter && (
            <div className="datatable-search">
              <DebouncedInput
                value={globalFilter ?? ''}
                onChange={(value) => setGlobalFilter(String(value))}
                className="datatable-input"
                placeholder="검색어를 입력하세요"
              />
            </div>
          )}
        </div>
        {/* Table Content */}
        <table className="table w-full table-auto datatable-table">
          {/* Table Header */}
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th key={header.id} colSpan={header.colSpan}>
                      <div className="flex items-center justify-betweengap-1.5">
                        {header.isPlaceholder ? null : (
                          <>
                            <div
                              {...{
                                className: `${
                                  header.column.getCanSort()
                                    ? 'cursor-pointer select-none'
                                    : ''
                                } `,
                                onClick:
                                  header.column.getToggleSortingHandler(),
                              }}
                            >
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                            </div>
                            <div className="inline-flex p-0 ml-2.5">
                              {{
                                asc: (
                                  <span className="inline-block">
                                    <svg
                                      className="fill-current"
                                      width="10"
                                      height="5"
                                      viewBox="0 0 10 5"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M5 0L0 5H10L5 0Z" fill="" />
                                    </svg>
                                  </span>
                                ),
                                desc: (
                                  <span className="inline-block">
                                    <svg
                                      className="fill-current"
                                      width="10"
                                      height="5"
                                      viewBox="0 0 10 5"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                                        fill=""
                                      />
                                    </svg>
                                  </span>
                                ),
                              }[header.column.getIsSorted() as string] ?? null}
                            </div>
                          </>
                        )}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          {/* Table body */}
          <tbody>
            {/* Table Row */}
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          {showFooter ? (
            <tfoot>
              {/* Table Footer */}
              {table.getFooterGroups().map((footerGroup) => (
                <tr key={footerGroup.id}>
                  {footerGroup.headers.map((header) => (
                    <th key={header.id} colSpan={header.colSpan} className="">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.footer,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </tfoot>
          ) : null}
        </table>
        {showNavigation ? (
          <div className="datatable-bottom">
            {/* Table Pagination */}
            <nav className="datatable-pagination">
              <ul className="datatable-pagination-list">
                <li className={!table.getCanPreviousPage() ? 'hidden' : ''}>
                  <button
                    onClick={() => table.previousPage()}
                    className={!table.getCanPreviousPage() ? 'hidden' : ''}
                  >
                    {'<'}
                  </button>
                </li>
                {visiblePages.map((pageIndex) => (
                  <li
                    className="datatable-pagination-list-item"
                    key={pageIndex + Math.ceil(Math.random() * 100000)}
                  >
                    {pageIndex !== -1 ? (
                      <button
                        onClick={() => table.setPageIndex(pageIndex)}
                        className={
                          currentPage === pageIndex ? 'datatable-active' : ''
                        }
                      >
                        {pageIndex + 1}
                      </button>
                    ) : (
                      <button>
                        {/* TODO */}
                        {/* <input
                              type="number"
                              defaultValue={table.getState().pagination.pageIndex + 1}
                              onChange={e => {
                                const page = e.target.value ? Number(e.target.value) - 1 : 0
                                table.setPageIndex(page)
                              }}
                              className="border p-1 rounded w-16"
                            /> */}
                        <svg
                          className="fill-current"
                          width="10"
                          height="3"
                          viewBox="0 0 10 3"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.927734 2.06738C1.41992 2.06738 1.8164 1.66406 1.8164 1.17871C1.8164 0.686523 1.41992 0.290039 0.927734 0.290039C0.442383 0.290039 0.0390625 0.686523 0.0390625 1.17871C0.0390625 1.66406 0.442383 2.06738 0.927734 2.06738ZM4.99998 2.06738C5.49217 2.06738 5.88865 1.66406 5.88865 1.17871C5.88865 0.686523 5.49217 0.290039 4.99998 0.290039C4.51463 0.290039 4.11131 0.686523 4.11131 1.17871C4.11131 1.66406 4.51463 2.06738 4.99998 2.06738ZM9.07224 2.06738C9.56443 2.06738 9.96091 1.66406 9.96091 1.17871C9.96091 0.686523 9.56443 0.290039 9.07224 0.290039C8.58689 0.290039 8.18357 0.686523 8.18357 1.17871C8.18357 1.66406 8.58689 2.06738 9.07224 2.06738Z"
                            fill=""
                          />
                        </svg>
                      </button>
                    )}
                  </li>
                ))}
                <li className={!table.getCanNextPage() ? 'hidden' : ''}>
                  <button
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    className=""
                  >
                    {'>'}
                  </button>
                </li>
              </ul>
            </nav>
            <select
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value));
              }}
              className="datatable-selector"
            >
              {[10, 30, 50, 100].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}개씩
                </option>
              ))}
            </select>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TableOne;
