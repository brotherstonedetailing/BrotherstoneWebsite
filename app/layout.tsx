import type { Metadata } from "next";
import { Sansation } from "next/font/google";
import Footer from "@/app/footer";
import Navbar from "@/app/navbar";
import { BUSINESS_NAME, SITE_URL } from "@/app/lib/constants";
import { localBusinessSchema } from "@/app/lib/structured-data";
import "./globals.css";

const sansation = Sansation({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-sansation",
});

const DESCRIPTION =
  "Professional mobile car detailing in Katy, Texas and surrounding areas. Interior, exterior, and full detail packages.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Brotherstone | Katy TX Mobile Detailing",
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: BUSINESS_NAME,
    title: "Brotherstone | Katy TX Mobile Detailing",
    description: DESCRIPTION,
    url: SITE_URL,
    images: [{ url: "/gtrExterior.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sansation.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
