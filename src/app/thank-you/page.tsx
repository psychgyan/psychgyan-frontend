import { Metadata } from "next";
import { ThankYouPage } from "@/features/thankyou/ThankYouPage";

export const metadata: Metadata = {
  title: "Welcome to PsychGyan | Registration Confirmed",
  description:
    "Aapka registration safaltapoorvak complete ho gaya hai. Join the VIP WhatsApp Group and take your free Psychometric Test.",
};

export default function ThankYouAlias() {
  return <ThankYouPage />;
}
