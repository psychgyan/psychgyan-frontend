import React from "react";
import { SessionSummaryItem } from "../types/thankYou.types";

interface SessionSummaryCardProps {
  title: string;
  tag: string;
  items: SessionSummaryItem[];
}

export const SessionSummaryCard: React.FC<SessionSummaryCardProps> = ({
  title,
  tag,
  items,
}) => {
  return (
    <div className="bg-[#152747] text-white rounded-[14px] px-[14px] py-[12px] text-[11px] leading-[1.5]">
      <div className="text-[12.5px] font-extrabold text-white mb-[6px] flex items-center justify-between">
        <span>{title}</span>
        <span className="text-[#38bdf8] text-[10px] font-semibold">{tag}</span>
      </div>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex justify-between text-[#cbd5e1] py-[3px] border-b border-[rgba(255,255,255,0.08)] last:border-b-0"
        >
          <span>{item.label}</span>
          <strong className="text-white font-bold">{item.value}</strong>
        </div>
      ))}
    </div>
  );
};
