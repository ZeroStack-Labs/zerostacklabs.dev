import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZeroStack Labs",
  description:
    "ZeroStack Labs is an independent technology lab exploring cybersecurity, AI, software development, networking, homelabs, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}