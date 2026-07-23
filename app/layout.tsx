import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OnePlus One | Building AI products that simplify everyday life",
  description:
    "FamilyOS is a secure, zero-knowledge digital family operating system powered by AI. Seamlessly organize, understand, and manage critical documents in one secure workspace.",
  keywords: [
    "FamilyOS",
    "OnePlus One",
    "Secure document vault",
    "Zero knowledge family cloud",
    "AI document manager",
    "OCR family records",
  ],
  authors: [{ name: "OnePlus One Development Team" }],
  openGraph: {
    title: "OnePlus One | FamilyOS — Your Family's AI Operating System",
    description:
      "Create a secure digital family workspace. Organize deeds, insurance policies, and identity records using zero-knowledge client encryption.",
    url: "https://oneplusone.ai",
    siteName: "OnePlus One",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OnePlus One | FamilyOS",
    description: "Your Family's AI Operating System. Secure document vault and OCR parsing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "OnePlus One",
    "url": "https://oneplusone.ai",
    "logo": "https://oneplusone.ai/logo.png",
    "description": "Building AI products that simplify everyday life.",
    "sameAs": [
      "https://twitter.com/oneplusone",
      "https://linkedin.com/company/oneplusone",
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI OS Systems",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "FamilyOS",
            "description": "Secure document vault and AI assistant for families.",
          },
        },
      ],
    },
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-brand-navy-deep text-slate-100 min-h-screen flex flex-col justify-between">
        {children}
      </body>
    </html>
  );
}
