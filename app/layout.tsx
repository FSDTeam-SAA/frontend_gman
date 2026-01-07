import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import AppProvider from "@/provider/AppProvider";
import { Toaster } from "sonner";
import { Providers } from "@/components/sheard/session-provider";
import StripeProvider from "@/components/sheard/StripeProvider";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Studio Signal",
  description: "Personal project showcase and anonymized case studies.",
  icons: {
    icon: "/asset/portfolio-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} font-sans antialiased bg-[#F9F9F9]`}>
        <StripeProvider>
          <Providers>
            <AppProvider>
              {children}
              <Toaster />
            </AppProvider>
          </Providers>
        </StripeProvider>
      </body>
    </html>
  );
}
