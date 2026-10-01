import React from "react";

interface MasterclassTicketProps {
  title: string;
  duration: string;
  price: string;
}

export const MasterclassTicket: React.FC<MasterclassTicketProps> = ({
  title,
  duration,
  price,
}) => {
  return (
    <div className="bg-gradient-to-br from-[#091322] to-[#152747] text-white rounded-[12px] px-[14px] py-[10px] flex justify-between items-center shadow-[0_4px_14px_rgba(9,19,34,0.15)] border border-[rgba(255,255,255,0.1)]">
      <div>
        <div className="text-[13px] font-extrabold tracking-[-0.2px] text-white">
          {title}
        </div>
        <div className="text-[10px] text-[#94a3b8] mt-[2px] font-semibold">
          ({duration} | {price})
        </div>
      </div>
      <div className="bg-[#22c55e] text-[#042f13] px-[10px] py-[4px] rounded-[8px] text-[12.5px] font-extrabold shadow-[0_2px_8px_rgba(34,197,94,0.4)]">
        {price}
      </div>
    </div>
  );
};
