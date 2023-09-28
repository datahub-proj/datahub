import React, { useEffect } from 'react';

// useOutClick 훅의 타입 정의
// close if the esc key is pressed
// Check if ESC key (keyCode 27) is pressed

export const useOutClick = (
  refs: React.RefObject<HTMLElement>[],
  callback: () => void
) => {
  useEffect(() => {
    const handleOutClicked = (event: MouseEvent) => {
      let isOuterClicked = true;
      for (const ref of refs) {
        if (ref.current && ref.current.contains(event.target as Node)) {
          isOuterClicked = false;
          break;
        }
      }
      if (isOuterClicked) {
        callback();
      }
    };
    document.addEventListener('mousedown', handleOutClicked);
    return () => {
      document.removeEventListener('mousedown', handleOutClicked);
    };
  }, [refs, callback]);

  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (keyCode === 27) {
        callback();
      }
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, [callback]);
};
