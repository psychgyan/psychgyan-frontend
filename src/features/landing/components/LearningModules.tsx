import React from "react";
import { LearnItem } from "../types/landing.types";

interface LearningModulesProps {
  learnings: LearnItem[];
}

export const LearningModules: React.FC<LearningModulesProps> = ({
  learnings,
}) => {
  return (
    <div className="bg-[#ffffff] border border-[#e2e8f0] rounded-[14px] px-[12px] py-[11px] shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
      <div className="flex items-center gap-[6px] text-[12.5px] font-extrabold text-[#091322] mb-[8px] pb-[5px] border-b border-[#f1f5f9]">
        <span className="text-[14px]">🎯</span>
        <span>What you will learn:</span>
      </div>
      <div className="flex flex-col gap-[6px]">
        {learnings.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-[7px] text-[11px] sm:text-[12px] leading-[1.38] text-[#475569]"
          >
            <span className="shrink-0 w-[15px] h-[15px] bg-[#eff6ff] border border-[#bfdbfe] text-[#2563eb] rounded-full flex items-center justify-center text-[9px] font-extrabold mt-[1px]">
              {item.id}
            </span>
            <div>
              <strong className="text-[#0f172a] font-bold">{item.title}</strong>{" "}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
