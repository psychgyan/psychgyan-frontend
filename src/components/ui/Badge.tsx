import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "live" | "sky" | "green" | "gold" | "dark";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "sky",
  className = "",
}) => {
  const variantStyles = {
    live: "bg-red-500/15 border border-red-500/35 text-red-300 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full tracking-wider inline-flex items-center gap-1.5",
    sky: "text-[10.5px] font-bold text-sky-400 bg-sky-400/10 px-2 py-0.5 rounded-lg border border-sky-400/25 inline-flex items-center gap-1",
    green: "bg-emerald-500 text-emerald-950 px-2.5 py-1 rounded-lg text-xs font-extrabold shadow-sm shadow-emerald-500/40 inline-flex items-center gap-1",
    gold: "bg-gradient-to-r from-amber-600 to-amber-700 text-white text-[8.5px] font-extrabold px-1.5 py-0.5 rounded-md uppercase tracking-wider shadow-sm shadow-amber-900/30",
    dark: "bg-black/65 backdrop-blur-md px-2 py-0.5 rounded-md text-[10px] font-bold text-white border border-white/15",
  };

  return (
    <span className={`${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
