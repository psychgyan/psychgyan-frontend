"use client";

import React from "react";
import { siteConfig } from "@/lib/config";

interface StickyCtaDockProps {
  title: string;
  subtitle: string;
  onAction?: () => void;
  actionUrl?: string;
}

export const StickyCtaDock: React.FC<StickyCtaDockProps> = ({
  title,
  subtitle,
  onAction,
  actionUrl,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onAction) {
      onAction();
      return;
    }
    const targetUrl = actionUrl || siteConfig.paymentUrl;
    if (targetUrl) {
      window.location.href = targetUrl;
    }
  };

  return (
    <div className="sticky-cta-dock">
      <a href="#register" className="btn-action" onClick={handleClick}>
        <div className="btn-title-row">
          <span>{title}</span>
          <span style={{ fontSize: "15px" }}>→</span>
        </div>
        <div className="btn-subtitle-row">{subtitle}</div>
      </a>
    </div>
  );
};
