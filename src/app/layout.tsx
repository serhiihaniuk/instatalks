import "~/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

import { Inter } from "next/font/google";
import Footer from "~/components/footer";

const inter = Inter({
  subsets: ["cyrillic", "cyrillic-ext", "latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Nail Moment",
  description:
    "Присоединяйтесь к ведущей конференции Нейл Момент 2023 в Варшаве для специалистов ногтевого сервиса. Откройте для себя последние тенденции отрасли, общайтесь с экспертами и повышайте свои навыки. Забронируйте сейчас для участия в познавательных докладах, мастер-классах и эксклюзивных возможностях для нетворкинга.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <meta name="description" content="" />
        <meta
          name="keywords"
          content="конференция ногтевого сервиса, эксперты по маникюру, тенденции педикюра, индустрия красоты, образование для техников по ногтям, конференция красоты, мастер-классы по ногтям, событие ногтевой индустрии Варшавы, нетворкинг для профессионалов ногтевого сервиса"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`w-max-[100vw] flex min-h-screen flex-col overflow-x-hidden scroll-smooth bg-[#1c2a2a] font-sans ${inter.variable}`}
      >
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
