import React from "react";
import Image from "next/image";
import { TopStrip } from "./components/TopStrip";
import { HeroSection } from "./components/HeroSection";
import { AudienceCard } from "./components/AudienceCard";
import { VideoPlayer } from "./components/VideoPlayer";
import { TruthCallout } from "./components/TruthCallout";
import { MasterclassTicket } from "./components/MasterclassTicket";
import { LearningModules } from "./components/LearningModules";
import { BonusVoucher } from "./components/BonusVoucher";
import { StickyCtaDock } from "@/components/ui/StickyCtaDock";
import { landingData } from "./data/landingData";

export const LandingPage: React.FC = () => {
  return (
    <div className="w-full max-w-[480px] min-h-screen bg-[#f8fafc] shadow-2xl relative flex flex-col justify-between">
      <div className="flex flex-col">
        {/* EKDOM DARK PATTI (Top High-Impact Strip) */}
        <TopStrip />

        {/* Main Visual Stream / Content Flow */}
        <div className="p-[14px] pb-[85px] flex flex-col gap-[12px]">
          {/* 1. Hero Headline */}
          <HeroSection
            mainTitle={landingData.headline.main}
            highlightText={landingData.headline.highlight}
          />

          {/* 2. Target Audience */}
          <AudienceCard audience={landingData.audience} />

          {/* 3. Luxury Video Frame (Commented out for future use - currently showing photo) */}
          {/* <VideoPlayer /> */}

          {/* Hero Section Coach Intro Photo */}
          <div className="relative w-full rounded-[16px] overflow-hidden shadow-[0_12px_30px_-8px_rgba(9,19,34,0.45),0_0_0_1px_rgba(9,19,34,0.1)] border border-[#091322]/10 bg-[#020710]">
            <Image
              src="/images/HeroSection-YashCoachIntro.jpeg"
              alt="Coach Yash Intro"
              width={1376}
              height={768}
              priority
              className="w-full h-auto object-cover block rounded-[16px]"
            />
          </div>

          {/* 4. The Truth Callout */}
          <TruthCallout
            highlight={landingData.truth.highlight}
            text={landingData.truth.text}
          />

          {/* 5. Masterclass Ticket Header */}
          <MasterclassTicket
            title={landingData.ticket.title}
            duration={landingData.ticket.duration}
            price={landingData.ticket.price}
          />

          {/* 6. What You Will Learn Section */}
          <LearningModules learnings={landingData.learnings} />

          {/* 7. Free Bonus Section */}
          <BonusVoucher
            title={landingData.bonus.title}
            value={landingData.bonus.value}
            items={landingData.bonus.items}
          />
        </div>
      </div>

      {/* 8. Sticky High-Converting CTA Button (Register Now) */}
      <StickyCtaDock
        title={landingData.cta.buttonText}
        subtitle={landingData.cta.subtitle}
      />
    </div>
  );
};
