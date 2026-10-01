"use client";

import React, { useState } from "react";

interface VideoPlayerProps {
  embedUrl?: string;
  thumbnailTitle?: string;
  durationTag?: string;
  qualityTag?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  embedUrl = "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1",
  thumbnailTitle = "Watch 2-Min Teaser",
  durationTag = "02:00 MIN",
  qualityTag = "HD 1080P",
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full pt-[56.25%] rounded-[16px] overflow-hidden bg-[#020710] shadow-[0_12px_30px_-8px_rgba(9,19,34,0.45),0_0_0_1px_rgba(9,19,34,0.1)]">
      {isPlaying ? (
        <iframe
          src={embedUrl}
          title="Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full border-0"
        />
      ) : (
        <div
          onClick={() => setIsPlaying(true)}
          className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-[radial-gradient(circle_at_50%_40%,#1e3a6a_0%,#091322_100%)] text-white text-center p-[14px] cursor-pointer group select-none"
        >
          <div className="absolute top-[10px] left-[10px] bg-[rgba(0,0,0,0.65)] backdrop-blur-[8px] px-[8px] py-[3px] rounded-[6px] text-[10px] font-bold text-white border border-[rgba(255,255,255,0.15)]">
            {qualityTag}
          </div>
          <div className="absolute top-[10px] right-[10px] bg-[rgba(0,0,0,0.65)] backdrop-blur-[8px] px-[8px] py-[3px] rounded-[6px] text-[10px] font-bold text-[#38bdf8] border border-[rgba(255,255,255,0.15)]">
            {durationTag}
          </div>

          <div className="w-[50px] h-[50px] bg-gradient-to-br from-[#ef4444] to-[#b91c1c] rounded-full flex items-center justify-center mb-[7px] shadow-[0_0_24px_rgba(239,68,68,0.65)] transition-transform duration-200 group-hover:scale-105">
            <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] fill-white ml-[3px]">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>

          <strong className="text-[13px] font-extrabold tracking-[-0.2px]">
            {thumbnailTitle}
          </strong>
          <span className="text-[10px] text-[#94a3b8] mt-[2px]">
            Tap to preview or embed custom video
          </span>
        </div>
      )}
    </div>
  );
};
