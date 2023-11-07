import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Footer from "~/components/footer";

const inter = Inter({
  subsets: ["cyrillic", "cyrillic-ext", "latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Nail Moment",
  description: "Nail Moment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`w-max-[100vw] overflow-x-hidden scroll-smooth bg-[#1c2a2a] font-sans ${inter.variable}`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
