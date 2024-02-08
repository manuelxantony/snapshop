import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

export const metadata: Metadata = {
  title: "SnapShop",
  description: "Your Quickest Shopping Destination",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rajdhani.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
