import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SearchBarProvider } from "./context/SearchBarContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sonder",
  description: "Hotel Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SearchBarProvider>
          <Navbar />
          {children}
          <Footer />
        </SearchBarProvider>
      </body>
    </html>
  );
}
