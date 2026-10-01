import React from "react";
import { ThankYouTopStrip } from "./components/ThankYouTopStrip";
import { WelcomeCard } from "./components/WelcomeCard";
import { ActionNotice } from "./components/ActionNotice";
import { WhatsAppCard } from "./components/WhatsAppCard";
import { TestCard } from "./components/TestCard";
import { SessionSummaryCard } from "./components/SessionSummaryCard";
import { WhatsAppModal } from "./components/WhatsAppModal";
import { thankYouData } from "./data/thankYouData";

export const ThankYouPage: React.FC = () => {
  return (
    <div className="w-full max-w-[480px] min-h-screen bg-[#f8fafc] shadow-2xl relative flex flex-col">
      {/* Top Success Status Strip */}
      <ThankYouTopStrip statusText={thankYouData.statusText} />

      {/* VIP WhatsApp Group Modal (Auto open on page load) */}
      <WhatsAppModal
        title={thankYouData.popup.title}
        text={thankYouData.popup.text}
        buttonText={thankYouData.popup.buttonText}
        dismissText={thankYouData.popup.dismissText}
      />

      {/* Main Content Stream */}
      <div className="p-[14px] pb-[40px] flex flex-col gap-[14px]">
        {/* Welcome Hero Card */}
        <WelcomeCard
          title={thankYouData.welcome.title}
          subtitle={thankYouData.welcome.subtitle}
        />

        {/* Action Notice Bar */}
        <ActionNotice noticeText={thankYouData.actionNotice} />

        {/* 1. WhatsApp Community Joining Card */}
        <WhatsAppCard
          badge={thankYouData.whatsappCard.badge}
          title={thankYouData.whatsappCard.title}
          description={thankYouData.whatsappCard.description}
          buttonText={thankYouData.whatsappCard.buttonText}
        />

        {/* 2. Psychometric Test Card */}
        <TestCard
          badge={thankYouData.testCard.badge}
          ribbon={thankYouData.testCard.ribbon}
          title={thankYouData.testCard.title}
          description={thankYouData.testCard.description}
          buttonText={thankYouData.testCard.buttonText}
        />

        {/* Masterclass Summary Card */}
        <SessionSummaryCard
          title={thankYouData.summary.title}
          tag={thankYouData.summary.tag}
          items={thankYouData.summary.items}
        />

        {/* Help / Support Footer Text */}
        <div className="text-center text-[10.5px] text-[#94a3b8] py-[4px] pb-[10px]">
          {thankYouData.supportText}
        </div>
      </div>
    </div>
  );
};
