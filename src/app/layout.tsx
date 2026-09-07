import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dipin Roka | Portfolio",
  description:
    "BCA (AI & ML) student at Alliance University | Vision X Member | Full Stack Builder. Building AI-powered products for hackathons and production.",
  keywords: [
    "Dipin Roka",
    "Portfolio",
    "Full Stack Developer",
    "AI Enthusiast",
    "BCA",
    "Alliance University",
    "Vision X",
    "React",
    "Next.js",
  ],
  openGraph: {
    title: "Dipin Roka | Portfolio",
    description:
      "BCA (AI & ML) student at Alliance University | Full Stack Builder | Hackathon Participant",
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
