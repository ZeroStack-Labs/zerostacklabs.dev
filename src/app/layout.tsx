import type { Metadata } from "next";
import "./globals.css";
import { Saira_Condensed } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const saira = Saira_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZeroStack Labs",
  description: "Build.  Break.  Learn.  Repeat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${saira.className} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
