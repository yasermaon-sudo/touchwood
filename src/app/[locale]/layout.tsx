
import type { Metadata } from "next";
import { Alexandria } from "next/font/google";

import "../globals.css";

import SiteLayout from "@/components/layout/SiteLayout";

const alexandria = Alexandria({
  variable: "--font-alexandria",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Touch Wood",
  description: "Touch Wood Furniture Store",
};

export default async function LocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={alexandria.className}>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}

