import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "cursor-pointer inline-flex items-center justify-center px-3 py-2 text-sm font-semibold transition-all duration-200 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-brand-orange text-white hover:bg-opacity-90 focus:ring-brand-orange shadow-lg shadow-brand-orange/20",
    outline:
      "bg-transparent border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white",
    ghost: "bg-transparent text-brand-blue hover:text-brand-orange p-0",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
