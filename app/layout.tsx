import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });

export const viewport: Viewport = { themeColor: "#101828", width: "device-width", initialScale: 1 };

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "English Teaching Training in Fès, Morocco | Pedagogy & Classroom Management",
    template: "%s | English Teaching Training Fès",
  },
  description:
    "English teaching training in Fès, Morocco: pedagogy, didactics and classroom management for teaching English to learners aged 4 to 20. Face-to-face and online.",
  keywords: [
    "English Teaching Training Morocco",
    "English Teaching Methods",
    "Pedagogy Training",
    "Didactics",
    "Classroom Management",
    "Teaching English to Children",
    "Fès",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    title: "English Teaching Training in Fès, Morocco",
    description: "Learn how to teach English to children and teenagers: pedagogy, didactics and classroom management.",
  },
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: site.name,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  address: { "@type": "PostalAddress", addressLocality: "Fès", addressCountry: "MA" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
        <RevealOnScroll />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
