import React from "react";
import { siteConfig } from "@/lib/config";

interface WhatsAppCardProps {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  customUrl?: string;
}

export const WhatsAppCard: React.FC<WhatsAppCardProps> = ({
  badge,
  title,
  description,
  buttonText,
  customUrl,
}) => {
  const url = customUrl || siteConfig.whatsappCommunityUrl;

  return (
    <div className="bg-gradient-to-br from-[#f0fdf4] to-[#ffffff] border-2 border-[#bbf7d0] rounded-[16px] p-[14px] shadow-[0_6px_20px_-3px_rgba(37,211,102,0.15)] relative">
      <div className="inline-flex items-center bg-[#15803d] text-white text-[9.5px] font-extrabold px-[8px] py-[3px] rounded-[6px] tracking-[0.5px] uppercase mb-[7px]">
        {badge}
      </div>
      <div className="text-[14px] font-extrabold text-[#14532d] flex items-center gap-[7px] mb-[5px]">
        <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] fill-[#25D366] shrink-0">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.78 14.12c-.24.68-1.39 1.32-1.92 1.4-.49.07-1.13.1-3.27-.79-2.58-1.07-4.22-3.71-4.35-3.89-.13-.17-1.04-1.38-1.04-2.64s.66-1.87.9-2.13c.24-.25.52-.31.7-.31.18 0 .36 0 .52.01.17.01.4.06.6.56.22.52.75 1.83.82 1.97.07.14.12.31.02.5-.09.18-.14.29-.27.45-.14.16-.29.35-.41.47-.14.14-.29.29-.12.58.17.29.74 1.22 1.59 1.98 1.09.97 2.01 1.27 2.3 1.41.29.14.46.12.63-.07.17-.19.73-.85.92-1.15.19-.29.39-.24.65-.15.26.1 1.66.78 1.95.92.29.14.48.22.55.33.07.12.07.69-.17 1.37z" />
        </svg>
        <span>{title}</span>
      </div>
      <p className="text-[11px] text-[#334155] leading-[1.45] mb-[12px]">
        {description}
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-[8px] w-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white no-underline text-[13px] font-extrabold px-[14px] py-[11px] rounded-[12px] shadow-[0_6px_18px_-3px_rgba(37,211,102,0.4)] transition-all duration-200 active:scale-[0.98]"
      >
        <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-white">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.78 14.12c-.24.68-1.39 1.32-1.92 1.4-.49.07-1.13.1-3.27-.79-2.58-1.07-4.22-3.71-4.35-3.89-.13-.17-1.04-1.38-1.04-2.64s.66-1.87.9-2.13c.24-.25.52-.31.7-.31.18 0 .36 0 .52.01.17.01.4.06.6.56.22.52.75 1.83.82 1.97.07.14.12.31.02.5-.09.18-.14.29-.27.45-.14.16-.29.35-.41.47-.14.14-.29.29-.12.58.17.29.74 1.22 1.59 1.98 1.09.97 2.01 1.27 2.3 1.41.29.14.46.12.63-.07.17-.19.73-.85.92-1.15.19-.29.39-.24.65-.15.26.1 1.66.78 1.95.92.29.14.48.22.55.33.07.12.07.69-.17 1.37z" />
        </svg>
        <span>{buttonText}</span>
      </a>
    </div>
  );
};
