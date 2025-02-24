// Button.js
import React from "react";

const Button = ({ label, type }) => {
  const baseStyles = "px-4 py-2 rounded text-white font-semibold";
  const typeStyles = {
    primary: "bg-blue-500 hover:bg-blue-700",
    secondary: "bg-gray-500 hover:bg-gray-700",
    danger: "bg-red-500 hover:bg-red-700",
  };

  return (
    <button className={`${baseStyles} ${typeStyles[type] || typeStyles.primary}`}>
      {label}
    </button>
  );
};

export default Button;
