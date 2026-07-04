import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "F H & L Technologies | AML/CFT/CPF Compliance Solutions",
  description: "Technology with Purpose, Solutions with Heart. F H & L Technologies provides enterprise AML/CFT/CPF compliance platforms, goAML audits, regulatory consultancy, and agentic AI solutions for financial institutions.",
  keywords: "AML, CFT, CPF, Compliance, goAML, Financial Compliance, RegTech, Sri Lanka, Fintech",
  authors: [{ name: "F H & L Technologies (Pvt) Ltd" }],
  openGraph: {
    title: "F H & L Technologies | AML/CFT/CPF Compliance Solutions",
    description: "Enterprise compliance platforms and regulatory consultancy services for financial institutions.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-navy-800 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
