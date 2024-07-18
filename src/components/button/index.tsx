import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ type = "button", children, ...rest }) => (
  <button type={type} className="btn btn-ghost bg-base-300" {...rest}>
    {children}
  </button>
);
