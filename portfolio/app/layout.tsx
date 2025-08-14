import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Dancing_Script } from "next/font/google";
// import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

// const classyMarisa = localFont({
//   src: [
//     {
//       path: "../public/fonts/ClassyMarisa-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/ClassyMarisa-Bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-classy-marisa",
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Kshitij - Portfolio",
  description: "Kshitij's personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
