import { Outfit, Ovo, Dancing_Script } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

const dancingScript = Dancing_Script({
  subsets: ["latin"], weight: ["400", "500", "600", "700"],
  variable: '--font-dancing-script',
});



export const metadata = {
  title: "Portfolio - Kshitij Narayan Kulkarni",
  description: "Full Stack Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${dancingScript.variable}`}>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/40 dotted-pattern dark:hidden" />
        {children}
      </body>
    </html>
  );
}
