import { LandingContent } from "../types/landing.types";

export const landingData: LandingContent = {
  headline: {
    main: "10 Hours in the Library.",
    highlight: "Zero Focus.",
  },
  audience: "Students doing self-study at home or in the library.",
  truth: {
    highlight: "NOT lazy",
    text: "When you study alone, distraction wins. You just need a system.",
  },
  ticket: {
    title: "MindShift90 Live Masterclass",
    duration: "2 Hours",
    price: "₹49",
  },
  learnings: [
    {
      id: 1,
      title: "Brain Mechanics:",
      description: "How to control your focus.",
    },
    {
      id: 2,
      title: "Self-Accountability:",
      description: "How to manage yourself.",
    },
    {
      id: 3,
      title: "The Fix:",
      description: "The real reason you waste time, and how to stop.",
    },
  ],
  bonus: {
    title: "Free Bonus: Psychometric Test",
    value: "Worth ₹600",
    items: [
      {
        id: 1,
        title: "Stop Guessing:",
        description: "Works like a blood test for your brain.",
      },
      {
        id: 2,
        title: "Exact Diagnosis:",
        description: "Pinpoints your specific focus problem.",
      },
      {
        id: 3,
        title: "Custom Help:",
        description:
          "Get highly targeted solutions during the webinar based on your test.",
      },
    ],
  },
  cta: {
    buttonText: "Book Your Seat + Free PMT – ₹49",
    subtitle: "⚡ Instant Access to Psychometric Test • Limited Seats",
  },
};
