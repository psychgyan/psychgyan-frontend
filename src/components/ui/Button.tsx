import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  fullWidth = true,
  className = "",
  onClick,
  ...props
}) => {
  const baseStyles =
    "relative overflow-hidden font-bold transition-all duration-200 active:scale-[0.98] disabled:opacity-50 flex flex-col items-center justify-center";
  
  const variantStyles = {
    primary:
      "bg-gradient-to-r from-blue-700 via-blue-800 to-slate-950 text-white rounded-2xl p-2.5 shadow-lg shadow-blue-700/40 border border-blue-600/30",
    secondary:
      "bg-slate-800 hover:bg-slate-700 text-white rounded-xl p-2.5 shadow border border-slate-700",
    outline:
      "bg-transparent border border-slate-300 text-slate-800 hover:bg-slate-50 rounded-xl p-2",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      {...props}
    >
      <span className="relative z-10 w-full flex flex-col items-center">
        {children}
      </span>
      {/* Shimmer animation */}
      {variant === "primary" && (
        <span className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent w-full h-full pointer-events-none" />
      )}
    </button>
  );
};
