import Input from '@/components/common/Input';
import React from 'react';

type InputGroupProps = {
  id: string;
  label: string;
  required?: boolean;
  errorMessage?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputGroup = React.forwardRef<HTMLInputElement, InputGroupProps>(
  ({ id, label, required = true, errorMessage, ...rest }, ref) => {
    return (
      <div className="flex flex-col">
        <label htmlFor={id} className="text-sm text-white mb-[2px]">
          {label}
          {required && <span className="text-[#ff0000] text-lg ml-1">*</span>}
        </label>
        <div className="mb-[20px]">
          <Input id={id} ref={ref} errorMessage={errorMessage} {...rest} />

          {errorMessage && (
            <div>
              <p className="mt-[5px] ml-[4px] text-xs text-whiten">
                {errorMessage}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
);

InputGroup.displayName = 'InputGroup';

export default InputGroup;
