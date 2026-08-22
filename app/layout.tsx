import type { Metadata } from "next";
import { Geist, Geist_Mono, Sacramento } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sacramento = Sacramento({
  variable: "--font-script",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Happy Birthday 🎂",
  description: "Make a wish and blow out the candle!",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${sacramento.variable} h-full antialiased`}
    >
      <body className="h-full flex flex-col overflow-hidden">{children}</body>
    </html>
  );
}
