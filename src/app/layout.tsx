import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adarsh Thapa",
  description: "Hello I am Adarsh Thapa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" /> {/* Replace with favicon.png if needed */}
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}
