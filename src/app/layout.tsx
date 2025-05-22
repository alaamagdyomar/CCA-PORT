import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata : Metadata = {
  title: "CCA Agents",
  description: "Official company portfolio built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
       <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
