import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ children, onClick, disabled, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full px-4 py-2 bg-blue-500 text-white rounded-lg ${
        disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
      } transition-colors`}
    >
      {children}
    </button>
  );
};

export default Button;