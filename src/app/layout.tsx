import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dipin Roka | Portfolio",
  description:
    "BCA student at Alliance University | Web Developer | AI Enthusiast | Hackathon Participant. Building impactful technology solutions.",
  keywords: [
    "Dipin Roka",
    "Portfolio",
    "Web Developer",
    "BCA",
    "Alliance University",
    "React",
    "Next.js",
  ],
  openGraph: {
    title: "Dipin Roka | Portfolio",
    description:
      "BCA student at Alliance University | Web Developer | AI Enthusiast | Hackathon Participant",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
