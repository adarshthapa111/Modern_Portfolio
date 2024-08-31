import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adarsh Thapa - Frontend Developer Portfolio",
  description:
    "Explore the portfolio of Adarsh Thapa, showcasing projects and skills in frontend development using React and Next.js.",
  keywords: [
    "Adarsh Thapa",
    "Frontend Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Web Development",
  ],
  authors: [{ name: "Adarsh Thapa", url: "https://adarshthapa.vercel.app/" }],
  creator: "Adarsh Thapa",
  publisher: "Adarsh Thapa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Adarsh Thapa - Frontend Developer Portfolio",
    description:
      "Explore the portfolio of Adarsh Thapa, showcasing projects and skills in frontend development using React and Next.js.",
    url: "https://adarshthapa.vercel.app/",
    siteName: "Adarsh Thapa Portfolio",
    images: [
      {
        url: "https://adarshthapa.vercel.app/img/bg.png",
        width: 800,
        height: 1200,
        alt: "Adarsh Thapa Portfolio Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adarsh Thapa - Frontend Developer Portfolio",
    description:
      "Explore the portfolio of Adarsh Thapa, showcasing projects and skills in frontend development using React and Next.js.",
    creator: "___Adarshthapa", // Replace with your Twitter handle
    images: [
      {
        url: "https://adarshthapa.vercel.app/img/bg.png",
        width: 800,
        height: 1000,
        alt: "Adarsh Thapa Portfolio Image",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      <body className={inter.className}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Adarsh Thapa",
              url: "https://adarshthapa.vercel.app/",
              sameAs: [
                "https://github.com/adarshthapa111", // Replace with your actual GitHub URL
                "https://www.linkedin.com/in/adarsh-thapa-8393552b0/", // Replace with your actual LinkedIn URL
                "https://x.com/___AdarshThapa", // Replace with your actual Twitter URL
              ],
              jobTitle: "Frontend Developer",
              worksFor: {
                "@type": "Organization",
                name: "Self-Employed",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
