import { Listbox } from '@headlessui/react';
import React, { ChangeEvent } from 'react';

type OptionItem = {
  id: any;
  label: string;
  value: string;
};

type SelectProps = {
  options: OptionItem[];
  selectedOption: OptionItem;
  handleChange: (selectedOption: OptionItem) => void;
};

const Select: React.FC<SelectProps> = ({
  options,
  selectedOption,
  handleChange,
}: SelectProps) => {
  return (
    <Listbox value={selectedOption} onChange={handleChange}>
      <Listbox.Button>{selectedOption.label}</Listbox.Button>
      <Listbox.Options>
        {options.map((option) => (
          <Listbox.Option key={option.id} value={option}>
            {option.label}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default Select;
