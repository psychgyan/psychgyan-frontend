import React from "react";

interface PulseDotProps {
  className?: string;
}

export const PulseDot: React.FC<PulseDotProps> = ({ className = "" }) => {
  return (
    <span
      className={`inline-block w-[6px] h-[6px] bg-[#ef4444] rounded-full shadow-[0_0_8px_#ef4444] animate-pulse-dot ${className}`}
    />
  );
};
