import "~/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

import { Montserrat } from "next/font/google";
import Footer from "~/components/footer";

const inter = Montserrat({
  subsets: ["cyrillic", "cyrillic-ext", "latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Nail Moment",
  description:
    "Приєднуйтесь до провідної конференції Нейл Момент 2023 у Варшаві для фахівців нігтьового сервісу. Відкрийте для себе останні тенденції галузі, спілкуйтеся з експертами та покращуйте свої навички. Забронюйте зараз для участі в пізнавальних доповідях, майстер-класах та ексклюзивних можливостях для нетворкінгу.",
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
          content="конференція нігтьового сервісу, експерти з манікюру, тенденції педикюру, індустрія краси, освіта для техніків з нігтьового сервісу, конференція краси, майстер-класи з нігтьового сервісу, подія нігтьової індустрії Варшави, нетворкінг для професіоналів нігтьового сервісу"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '891006909219412');
                fbq('track', 'PageView');
              `,
          }}
        ></script>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <img height="1" width="1" style="display:none"
              src="https://www.facebook.com/tr?id=891006909219412&ev=PageView&noscript=1"
              />
            `,
          }}
        />
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
