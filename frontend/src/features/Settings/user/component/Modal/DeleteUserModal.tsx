import React, { useEffect, useRef } from 'react';

type DeleteUserModalProps = {
  userid: string;
  modalRef: React.RefObject<HTMLElement>;
  dropdownOpen: boolean;
  open: boolean;
  handleModalOpen: (open: boolean) => void;
};

const DeleteUserModal: React.FC<DeleteUserModalProps> = ({
  userid,
  modalRef,
  dropdownOpen,
  open: modalOpen,
  handleModalOpen: setModalOpen,
  ...props
}: DeleteUserModalProps) => {
  return (
    <div>
      {/* Modal Inner */}

      {modalOpen && (
        <div className="fixed top-0 left-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5">
          <div
            ref={modalRef}
            className="w-full max-w-142.5 rounded-lg bg-white py-12 px-8 text-center dark:bg-boxdark md:py-15 md:px-17.5"
          >
            {/* Modal Inner Content */}
            <h3 className="pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">
              {userid} 삭제
            </h3>
            <span className="mx-auto mb-6 inline-block h-1 w-22.5 rounded bg-primary"></span>
            <p className="mb-10">정말 이 사용자를 삭제하길 원하십니까?</p>
            <div className="-mx-3 flex flex-wrap gap-y-4">
              <div className="w-full px-3 2xsm:w-1/2">
                <button
                  onClick={() => setModalOpen(false)}
                  className="block w-full rounded border border-stroke bg-gray p-3 text-center font-medium text-black transition hover:border-meta-1 hover:bg-meta-1 hover:text-white dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:border-meta-1 dark:hover:bg-meta-1"
                >
                  취소
                </button>
              </div>
              <div className="w-full px-3 2xsm:w-1/2">
                <button className="block w-full rounded border border-primary bg-primary p-3 text-center font-medium text-white transition hover:bg-opacity-90">
                  삭제
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteUserModal;
