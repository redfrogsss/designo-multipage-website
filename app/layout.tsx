import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./../styles/globals.scss";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import GoogleAnalytics from "@/components/google-analytics/GoogleAnalytics";

const jost = Jost({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Designo",
  description: "Designo is a creative agency that specializes in creating unique designs for businesses to stand out.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className={jost.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
