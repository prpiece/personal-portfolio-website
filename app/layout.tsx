import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Portfolio Website",
  description: "A modern, responsive portfolio website that showcases a designer's work, skills, and contact information.",
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
