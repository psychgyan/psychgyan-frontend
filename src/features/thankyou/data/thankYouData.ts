import { ThankYouContent } from "../types/thankYou.types";

export const thankYouData: ThankYouContent = {
  statusText: "Payment Successful • Seat Confirmed",
  welcome: {
    title: "Welcome to PsychGyan!",
    subtitle:
      "Aapka registration safaltapoorvak complete ho gaya hai. Webinar mein shamil hone ke liye ye dono steps zaroor poore karein:",
  },
  actionNotice:
    "Webinar access link aur bonus test unlock karne ke liye dono buttons par tap karein.",
  whatsappCard: {
    badge: "Step 1 • Sabse Zaroori",
    title: "Join Official WhatsApp Community",
    description:
      "Masterclass ka private Zoom Meeting Link, live session reminders aur important study materials isi WhatsApp group mein share kiye jayenge.",
    buttonText: "Click Here to Join WhatsApp Group",
  },
  testCard: {
    badge: "Step 2 • Free Bonus",
    ribbon: "Worth ₹600",
    title: "Take Your Psychometric Test",
    description:
      "Yeh test aapke brain ke focus problem ka exact diagnosis karega. Masterclass ke dauran live solutions paane ke liye session se pehle ye 10-minute test zaroor de dein.",
    buttonText: "Start Psychometric Test Now (10 Mins)",
  },
  summary: {
    title: "Session Summary",
    tag: "Live Interactive",
    items: [
      { label: "Program", value: "PsychGyan Masterclass" },
      { label: "Duration", value: "2 Hours Live" },
      { label: "Platform", value: "Zoom Meeting" },
      { label: "Pass Amount", value: "₹49 Paid (Verified)" },
    ],
  },
  supportText:
    "Kisi bhi sahayata ke liye WhatsApp community admin ya support@psychgyan.com par sampark karein.",
  popup: {
    title: "Join VIP WhatsApp Group",
    text: "Masterclass ka Zoom link aur test guidance WhatsApp group par hi bheja jayega. Abhi join karein!",
    buttonText: "Join WhatsApp Group Now",
    dismissText: "Neeche link se baad mein join karein",
  },
};
