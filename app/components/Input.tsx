"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  errors?: FieldErrors;
  register: UseFormRegister<FieldValues>;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  required,
  disabled,
  register
}) => {
  return (
    <div className="">
      <label className="text-sm font-medium text-gray-900">{label}</label>
      <div className="">
        <input
          id={id}
          type={type}
          required={required}
          disabled={disabled}
          {...register(id, { required })}
          className="w-full py-2 px-4 rounded-lg ring-1 ring-inset ring-gray-300"
        />
      </div>
    </div>
  );
};

export default Input;
