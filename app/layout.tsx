import type { Metadata } from "next";
import { Sansation } from "next/font/google";
import Footer from "@/app/footer";
import Navbar from "@/app/navbar";
import "./globals.css";

const sansation = Sansation({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-sansation",
});

export const metadata: Metadata = {
  title: "Brotherstone | Katy TX Mobile Detailing",
  description:
    "Professional mobile car detailing in Katy, Texas and surrounding areas. Interior, exterior, and full detail packages.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sansation.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
