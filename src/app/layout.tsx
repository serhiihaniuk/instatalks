import "~/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["cyrillic", "cyrillic-ext"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Insta talks",
  description: "Insta talks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>{children}</body>
    </html>
  );
}
