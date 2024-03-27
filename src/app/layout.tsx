import { Analytics } from "@vercel/analytics/react";

import { Montserrat } from "next/font/google";
import Footer from "~/components/footer";
import "~/styles/globals.css";

const inter = Montserrat({
  subsets: ["cyrillic", "cyrillic-ext", "latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Nail Moment",
  description:
    "Приєднуйтесь до провідної конференції Нейл Момент 2023 у Варшаві для фахівців нігтьового сервісу. Відкрийте для себе останні тенденції галузі, спілкуйтеся з експертами та покращуйте свої навички. Забронюйте зараз для участі в пізнавальних доповідях, майстер-класах та ексклюзивних можливостях для нетворкінгу.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <head>
        <meta
          name="keywords"
          content="конференція нігтьового сервісу, експерти з манікюру, тенденції педикюру, індустрія краси, освіта для техніків з нігтьового сервісу, конференція краси, майстер-класи з нігтьового сервісу, подія нігтьової індустрії Варшави, нетворкінг для професіоналів нігтьового сервісу"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`w-max-[100vw] flex min-h-screen flex-col overflow-x-hidden scroll-smooth bg-black font-sans ${inter.variable}`}
      >
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
