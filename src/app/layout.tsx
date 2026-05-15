import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sourav Sudheer | Data Scientist & ML Engineer",
  description:
    "Personal portfolio of Sourav Sudheer — Master of Data Analytics student at QUT, specialising in machine learning, predictive modelling, and deep learning.",
  keywords: ["data science", "machine learning", "portfolio", "Python", "analytics", "deep learning", "LightGBM", "PyTorch"],
  openGraph: {
    title: "Sourav Sudheer | Data Scientist & ML Engineer",
    description: "Data Science & Machine Learning Portfolio — Sourav Sudheer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
