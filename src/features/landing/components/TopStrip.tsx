import React from "react";
import { PulseDot } from "@/components/ui/PulseDot";

export const TopStrip: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#091322] to-[#0e1e38] px-[14px] pt-[10px] pb-[14px] text-white border-b-2 border-blue-600/30 after:content-[''] after:absolute after:bottom-0 after:left-[10%] after:right-[10%] after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-[#38bdf8] after:to-transparent">
      <div className="flex justify-between items-center mb-[6px]">
        <div className="inline-flex items-center gap-[6px] bg-[rgba(239,68,68,0.16)] border border-[rgba(239,68,68,0.35)] text-[#fca5a5] text-[10px] font-extrabold uppercase px-[8px] py-[2px] rounded-[12px] tracking-[0.5px]">
          <PulseDot />
          LIVE MASTERCLASS
        </div>
        <div className="text-[10.5px] font-bold text-[#38bdf8] bg-[rgba(56,189,248,0.12)] px-[8px] py-[2px] rounded-[8px] border border-[rgba(56,189,248,0.25)]">
          2 HOURS • ₹49 ONLY
        </div>
      </div>
    </div>
  );
};
