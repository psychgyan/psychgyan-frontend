"use client";

import React, { useState } from "react";
import { siteConfig } from "@/lib/config";

interface WhatsAppModalProps {
  title?: string;
  text?: string;
  buttonText?: string;
  dismissText?: string;
  customUrl?: string;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  title = "Join VIP WhatsApp Group",
  text = "Masterclass ka Zoom link aur test guidance WhatsApp group par hi bheja jayega. Abhi join karein!",
  buttonText = "Join WhatsApp Group Now",
  dismissText = "Neeche link se baad mein join karein",
  customUrl,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const url = customUrl || siteConfig.whatsappCommunityUrl;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[rgba(9,19,34,0.85)] backdrop-blur-[8px] z-[100] flex items-center justify-center p-[20px] animate-fadeIn">
      <div className="bg-[#ffffff] rounded-[22px] px-[18px] pt-[22px] pb-[20px] text-center w-full max-w-[320px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] relative">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-[12px] right-[14px] w-[28px] h-[28px] bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#64748b] hover:text-[#0f172a] rounded-full flex items-center justify-center text-[16px] font-extrabold cursor-pointer border border-[#e2e8f0] transition-colors"
          title="Close"
          aria-label="Close"
        >
          ×
        </button>

        {/* WhatsApp Icon Circle */}
        <div className="w-[60px] h-[60px] bg-[#dcfce7] rounded-full flex items-center justify-center mx-auto mb-[12px] shadow-[0_8px_20px_rgba(37,211,102,0.3)]">
          <svg viewBox="0 0 24 24" className="w-[34px] h-[34px] fill-[#25D366]">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.78 14.12c-.24.68-1.39 1.32-1.92 1.4-.49.07-1.13.1-3.27-.79-2.58-1.07-4.22-3.71-4.35-3.89-.13-.17-1.04-1.38-1.04-2.64s.66-1.87.9-2.13c.24-.25.52-.31.7-.31.18 0 .36 0 .52.01.17.01.4.06.6.56.22.52.75 1.83.82 1.97.07.14.12.31.02.5-.09.18-.14.29-.27.45-.14.16-.29.35-.41.47-.14.14-.29.29-.12.58.17.29.74 1.22 1.59 1.98 1.09.97 2.01 1.27 2.3 1.41.29.14.46.12.63-.07.17-.19.73-.85.92-1.15.19-.29.39-.24.65-.15.26.1 1.66.78 1.95.92.29.14.48.22.55.33.07.12.07.69-.17 1.37z" />
          </svg>
        </div>

        <h2 className="text-[16px] font-extrabold text-[#091322] mb-[6px] leading-[1.3]">
          {title}
        </h2>
        <p className="text-[11.5px] text-[#475569] leading-[1.45] mb-[16px]">
          {text}
        </p>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-[7px] w-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white no-underline text-[13.5px] font-extrabold px-[14px] py-[12px] rounded-[12px] shadow-[0_8px_20px_-3px_rgba(37,211,102,0.45)] mb-[10px] transition-transform active:scale-[0.98]"
        >
          <span>{buttonText}</span>
          <span>→</span>
        </a>

        <button
          onClick={() => setIsOpen(false)}
          className="block w-full text-[11px] text-[#94a3b8] hover:text-[#64748b] cursor-pointer underline bg-transparent border-0"
        >
          {dismissText}
        </button>
      </div>
    </div>
  );
};
