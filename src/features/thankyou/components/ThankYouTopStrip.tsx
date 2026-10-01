import React from "react";

interface ThankYouTopStripProps {
  statusText?: string;
}

export const ThankYouTopStrip: React.FC<ThankYouTopStripProps> = ({
  statusText = "Payment Successful • Seat Confirmed",
}) => {
  return (
    <div className="bg-[#091322] px-[16px] pt-[10px] pb-[14px] text-white text-center border-b-2 border-[rgba(34,197,94,0.4)]">
      <div className="inline-flex items-center gap-[6px] bg-[rgba(34,197,94,0.15)] border border-[rgba(34,197,94,0.35)] text-[#4ade80] text-[10.5px] font-extrabold px-[10px] py-[3px] rounded-[20px] tracking-[0.3px]">
        <span>✓</span>
        <span>{statusText}</span>
      </div>
    </div>
  );
};
