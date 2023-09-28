import { cn } from '@/lib/util';
import React from 'react';

type InputProps = {
  errorMessage?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, onChange, errorMessage, ...rest }, ref) => {
    const [value, setValue] = React.useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return (
      <div className="relative">
        <input
          type="text"
          id={id}
          className={cn(
            'w-full py-3 bg-strokedark3 border-2 border-white text-white focus:border-primary transition hover:bg-opacity-50 rounded-[4px] px-[16px] outline-none',
            'placeholder:text-white placeholder:text-[14px]',
            errorMessage && 'border-2 border-red '
          )}
          value={value}
          onChange={(e) => {
            onChange!(e);
            handleChange(e);
          }}
          autoComplete="new-password"
          ref={ref}
          {...rest}
        />

        {value && (
          <button type="button" onClick={() => setValue('')}>
            <span className="text-white absolute right-[15px] top-[50%] -translate-y-[50%]">
              X
            </span>
          </button>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
