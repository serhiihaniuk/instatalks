import "~/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

import { Inter } from "next/font/google";
import Footer from "~/components/footer";
import Script from "next/script";

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
