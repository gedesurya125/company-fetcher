import React from "react";

export const PrimaryButton = ({
  onClick,
  children,
  variant = "success",
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      className="px-4 py-3 bg-primary text-secondary rounded-md"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
