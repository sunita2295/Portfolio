import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: "Sunita Rout — Product Designer",
    description: "Product designer turning complex AI, SaaS, and B2B systems into measurable gains in adoption, speed, conversion, and retention.",
    openGraph: {
      title: "Sunita Rout — Product Designer",
      description: "Complex product problems. Clear design systems. Measurable outcomes across AI, SaaS, and B2B commerce.",
      type: "website",
      images: [{ url: `${origin}/og.png`, width: 1200, height: 630, alt: "Sunita Rout — Product Designer" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Sunita Rout — Product Designer",
      description: "Complex product problems. Clear design systems. Measurable outcomes across AI, SaaS, and B2B commerce.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
