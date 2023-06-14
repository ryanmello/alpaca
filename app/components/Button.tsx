"use client";

import clsx from "clsx";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  fullWidth?: boolean;
  danger?: boolean;
  secondary?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  disabled,
  fullWidth,
  danger,
  secondary,
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx("flex justify-center py-3 rounded-full font-semibold text-sm", disabled && "opacity-50 cursor-default", fullWidth && 'w-full', secondary ? 'text-gray-900' : 'text-white', danger && 'bg-rose-500 hover:bg-rose-600', !secondary && !danger && 'bg-indigo-400 hover:bg-indigo-500')}
    >
      {children}
    </button>
  );
};

export default Button;
