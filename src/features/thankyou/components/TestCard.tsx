import React from "react";
import { siteConfig } from "@/lib/config";

interface TestCardProps {
  badge: string;
  ribbon: string;
  title: string;
  description: string;
  buttonText: string;
  customUrl?: string;
}

export const TestCard: React.FC<TestCardProps> = ({
  badge,
  ribbon,
  title,
  description,
  buttonText,
  customUrl,
}) => {
  const url = customUrl || siteConfig.psychometricTestUrl;

  return (
    <div className="bg-gradient-to-br from-[#fffbeb] to-[#ffffff] border-2 border-[#fde68a] rounded-[16px] p-[14px] shadow-[0_6px_20px_-3px_rgba(245,158,11,0.12)] relative">
      <div className="inline-flex items-center bg-[#b45309] text-white text-[9.5px] font-extrabold px-[8px] py-[3px] rounded-[6px] tracking-[0.5px] uppercase mb-[7px]">
        {badge}
      </div>
      <div className="absolute top-[12px] right-[12px] bg-[#fef3c7] text-[#92400e] border border-[#fde68a] text-[9.5px] font-extrabold px-[7px] py-[2px] rounded-[6px]">
        {ribbon}
      </div>
      <div className="text-[14px] font-extrabold text-[#78350f] flex items-center gap-[6px] mb-[5px]">
        <span>🧠</span>
        <span>{title}</span>
      </div>
      <p className="text-[11px] text-[#334155] leading-[1.45] mb-[12px]">
        {description}
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-[7px] w-full bg-gradient-to-br from-[#d97706] to-[#091322] text-white no-underline text-[13px] font-extrabold px-[14px] py-[11px] rounded-[12px] shadow-[0_6px_18px_-3px_rgba(217,119,6,0.35)] transition-all duration-200 active:scale-[0.98]"
      >
        <span>{buttonText}</span>
        <span>→</span>
      </a>
    </div>
  );
};
