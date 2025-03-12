import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 bg-blue-500 text-white rounded ${
        disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;