import React from "react";

interface HeroSectionProps {
  mainTitle: string;
  highlightText: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  mainTitle,
  highlightText,
}) => {
  return (
    <div className="-mt-[2px]">
      <h1 className="text-[23px] sm:text-[28px] md:text-[32px] leading-[1.18] font-extrabold text-[#091322] tracking-[-0.6px]">
        {mainTitle}
        <br />
        <span className="text-[#dc2626] bg-[#fee2e2] px-[7px] py-[1px] rounded-[6px] inline-block shadow-[0_1px_2px_rgba(220,38,38,0.15)] mt-1">
          {highlightText}
        </span>
      </h1>
    </div>
  );
};
