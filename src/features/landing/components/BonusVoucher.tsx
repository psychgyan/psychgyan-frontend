import React from "react";
import { BonusItem } from "../types/landing.types";

interface BonusVoucherProps {
  title: string;
  value: string;
  items: BonusItem[];
}

export const BonusVoucher: React.FC<BonusVoucherProps> = ({
  title,
  value,
  items,
}) => {
  return (
    <div className="relative bg-gradient-to-br from-[#fffbeb] to-[#fef3c7] border border-[#fde68a] rounded-[14px] px-[12px] py-[11px] shadow-[0_4px_12px_-2px_rgba(245,158,11,0.08)]">
      <div className="absolute -top-[8px] right-[12px] bg-gradient-to-br from-[#d97706] to-[#b45309] text-white text-[8.5px] font-extrabold px-[7px] py-[2px] rounded-[6px] uppercase tracking-[0.5px] shadow-[0_2px_6px_rgba(180,83,9,0.3)]">
        LIMITED OFFER
      </div>
      <div className="text-[12.5px] font-extrabold text-[#92400e] mb-[7px] flex items-center gap-[5px]">
        <span>🎁</span>
        <span>{title}</span>
        <span className="text-[10.5px] text-[#b45309] line-through font-semibold ml-[2px]">
          ({value})
        </span>
      </div>
      <div className="flex flex-col gap-[6px]">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-[7px] text-[11px] sm:text-[12px] leading-[1.38] text-[#78350f]"
          >
            <span className="shrink-0 w-[15px] h-[15px] bg-[#fef3c7] border border-[#f59e0b] text-[#b45309] rounded-full flex items-center justify-center text-[9px] font-extrabold mt-[1px]">
              ✓
            </span>
            <div>
              <strong className="text-[#451a03] font-bold">{item.title}</strong>{" "}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
