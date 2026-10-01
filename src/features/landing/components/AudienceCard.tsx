import React from "react";

interface AudienceCardProps {
  audience: string;
}

export const AudienceCard: React.FC<AudienceCardProps> = ({ audience }) => {
  return (
    <div className="bg-[#ffffff] border border-[#cbd5e1] border-l-[4px] border-l-[#2563eb] px-[12px] py-[9px] rounded-[10px] text-[12px] leading-[1.4] text-[#334155] shadow-[0_2px_6px_rgba(0,0,0,0.03)]">
      <strong className="text-[#0f172a] font-bold">Who it's for:</strong>{" "}
      {audience}
    </div>
  );
};
