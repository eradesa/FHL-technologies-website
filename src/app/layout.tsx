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
  metadataBase: new URL("https://fhltech.lk"),
  title: "F H & L Technologies | AML/CFT/CPF Compliance Solutions",
  description: "Technology with Purpose, Solutions with Heart. F H & L Technologies provides enterprise AML/CFT/CPF compliance platforms, goAML audits, regulatory consultancy, and agentic AI solutions for financial institutions in Sri Lanka.",
  keywords: [
    "F H & L Technologies",
    "FHL Technologies",
    "F H L Technologies",
    "FH&L Technologies",
    "FH&L Tech",
    "FHL Tech",
    "F H L Tech",
    "F H & L Tech",
    "AML Compliance Sri Lanka",
    "CFT Compliance",
    "CPF Compliance",
    "goAML",
    "goAML Audit",
    "goAML Reporting",
    "Financial Compliance",
    "RegTech Sri Lanka",
    "Anti Money Laundering",
    "Counter Terrorist Financing",
    "Faith Hope Love",
    "Faith Hope and Love",
    "FaithHope&Love",
    "Compliance Solutions",
    "Regulatory Consultancy",
    "Agentic AI",
    "Fintech Sri Lanka"
  ].join(", "),
  authors: [{ name: "F H & L Technologies (Pvt) Ltd" }],
  openGraph: {
    title: "F H & L Technologies | AML/CFT/CPF Compliance Solutions",
    description: "Enterprise compliance platforms and regulatory consultancy services for financial institutions.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://fhltech.lk",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "F H & L Technologies (Pvt) Ltd",
  "alternateName": [
    "FHL Technologies",
    "F H L Technologies",
    "FH&L Technologies",
    "FHL Tech",
    "FH&L Tech",
    "Faith Hope Love",
    "Faith Hope and Love"
  ],
  "url": "https://fhltech.lk",
  "logo": "https://fhltech.lk/logo.png",
  "description": "Technology with Purpose, Solutions with Heart. Premier fintech company specializing in AML/CFT/CPF compliance solutions.",
  "areaServed": "Sri Lanka",
  "serviceType": [
    "AML Compliance",
    "CFT Compliance",
    "CPF Compliance",
    "goAML Services",
    "Regulatory Consultancy",
    "Banking Systems",
    "Agentic AI Solutions"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "info@fhltech.lk",
    "telephone": "+94-11-234-5678",
    "contactType": "Customer Service",
    "availableLanguage": ["English", "Sinhala", "Tamil"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-568SV3HNW5"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-568SV3HNW5');
          `
        }} />
      </head>
      <body className="min-h-full flex flex-col bg-navy-800 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
