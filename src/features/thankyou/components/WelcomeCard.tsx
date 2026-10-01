import React from "react";

interface WelcomeCardProps {
  title: string;
  subtitle: string;
}

export const WelcomeCard: React.FC<WelcomeCardProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center px-[6px] pt-[8px] pb-[2px]">
      <div className="w-[58px] h-[58px] bg-gradient-to-br from-[#22c55e] to-[#16a34a] text-white rounded-full flex items-center justify-center text-[28px] mx-auto mb-[10px] shadow-[0_10px_25px_-4px_rgba(34,197,94,0.5)]">
        ✓
      </div>
      <h1 className="text-[21px] font-extrabold text-[#091322] leading-[1.25] tracking-[-0.5px]">
        {title}
      </h1>
      <p className="text-[11.5px] text-[#64748b] mt-[5px] leading-[1.45]">
        {subtitle}
      </p>
    </div>
  );
};
