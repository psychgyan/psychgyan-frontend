import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "PsychGyan Live Masterclass | Beat Distraction",
  description:
    "10 Hours in the Library. Zero Focus. Join the 2-Hour PsychGyan Live Masterclass for ₹49 and claim a Free Psychometric Test worth ₹600.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" className={`${plusJakarta.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased min-h-screen bg-[radial-gradient(circle_at_50%_10%,#152238_0%,#060b14_100%)] flex justify-center items-start text-[#0f172a]">
        {children}
      </body>
    </html>
  );
}
