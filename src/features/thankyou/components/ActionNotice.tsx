import React from "react";

interface ActionNoticeProps {
  noticeText: string;
}

export const ActionNotice: React.FC<ActionNoticeProps> = ({ noticeText }) => {
  return (
    <div className="bg-[#eff6ff] border border-[#bfdbfe] border-l-[4px] border-l-[#2563eb] px-[11px] py-[8px] rounded-[9px] text-[11px] leading-[1.4] text-[#1e40af] font-semibold">
      ⚠️ <strong>Action Required:</strong> {noticeText}
    </div>
  );
};
