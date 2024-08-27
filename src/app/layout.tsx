import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adarsh Thapa - Frontend Developer Portfolio",
  description:
    "Explore the portfolio of Adarsh Thapa, showcasing projects and skills in frontend development using React and Next.js.",
  openGraph: {
    title: "Adarsh Thapa - Frontend Developer Portfolio",
    description:
      "Explore the portfolio of Adarsh Thapa, showcasing projects and skills in frontend development using React and Next.js.",
    url: "https://adarshthapa.vercel.app/",
    images: [
      {
        url: "/img/bg.png",
        width: 800,
        height: 600,
        alt: "Adarsh Thapa Portfolio Image",
      },
    ],
    siteName: "Adarsh Thapa Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adarsh Thapa - Frontend Developer Portfolio",
    description:
      "Explore the portfolio of Adarsh Thapa, showcasing projects and skills in frontend development using React and Next.js.",
    images: [
      // Use 'images' instead of 'image'
      {
        url: "/img/bg.png", // Use a relevant image for Twitter
        width: 800,
        height: 600,
        alt: "Adarsh Thapa Portfolio Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" />{" "}
      {/* Replace with favicon.png if needed */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
