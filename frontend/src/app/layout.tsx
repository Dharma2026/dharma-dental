import type { Metadata } from "next";
import { Open_Sans, Montserrat } from "next/font/google";
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import AppointmentPopup from '@/components/contact/Appointmentpopup';
import ScrollToTop  from '@/components/ScrollToTop';

import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "600"], // limit weights for performance
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Dental Clinic Name",
  description: "Professional dental care services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${montserrat.variable} antialiased`}
      >
        <Header />
        {children}
        <AppointmentPopup />
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
