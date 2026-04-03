import type { Metadata } from "next";
import "../styles/globals.css";
import { resume } from "@/data/resume";

export const metadata: Metadata = {
  title: `${resume.name} — ${resume.title}`,
  description: resume.summary,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
