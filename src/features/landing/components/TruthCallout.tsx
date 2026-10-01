import React from "react";

interface TruthCalloutProps {
  highlight: string;
  text: string;
}

export const TruthCallout: React.FC<TruthCalloutProps> = ({
  highlight,
  text,
}) => {
  return (
    <div className="bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] border border-dashed border-[#94a3b8] rounded-[12px] px-[12px] py-[9px] text-[11.5px] leading-[1.45] text-[#334155] relative">
      <strong className="text-[#0f172a]">The Truth:</strong> You are{" "}
      <span className="text-[#2563eb] font-extrabold">{highlight}</span>.<br />
      {text}
    </div>
  );
};
