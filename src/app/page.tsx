/* eslint-disable react/no-unescaped-entities */
import Card from "~/components/card";
import Image from "next/image";
import { cn, formatSubscribers } from "~/utils";
import { PricingCardVIP } from "~/components/pricing-card";
import Sponsor from "~/components/sponsor";
import { conferenceSpeakers } from "~/speakers";
import { AnimatedPinDemo } from "~/components/pin";
import { TracingBeam } from "~/components/track";

export default function HomePage() {
  return (
    <main
      style={{
        backgroundSize: "100% 15%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
      className="w-max-[100vw] relative flex min-h-screen flex-col items-center justify-center pb-6 text-white "
    >
      <div className="pointer-events-none fixed inset-0">
        <div
          className="w-max-[100wv] bg-bg_new pointer-events-none inset-0 left-0 top-0 h-full w-full bg-cover bg-center bg-no-repeat"
          style={{
            position: "absolute",
          }}
        />
      </div>
      <div className="flex w-full flex-col gap-12 bg-[center_top_1rem] bg-no-repeat">
        <section className="container flex min-h-screen flex-col items-center justify-center gap-5 bg-top">
          <div className="mt-5">
            <Image src="/main_logo.png" alt="" width={300} height={300} />
          </div>
          <h1 className="text-center text-2xl font-normal text-white">
            Конференція для майстрів манікюру та педикюру!
          </h1>
          <h2 className="text-center text-xl font-normal text-white">2024</h2>
          <p className="max-w-[520px] px-5 text-center text-lg font-thin">
            Конференція на якій ти дізнаєшся останню, трендову інформацію
            нігтьового світу, надихнешся і піднімеш свої знання на новий рівень.
            Ми об'єднали найактуальніші теми, які не може пропустити жоден nail
            майстер.
          </p>
          <h3 className="text-center text-xl font-normal text-white">
            28 квітня у Варшаві
          </h3>
          <div className="flex flex-col text-center md:flex-row">
            <a
              href="#details"
              className="mb-2 mr-2 rounded-lg border border-emerald-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300"
            >
              Детальніше
            </a>
            <a
              href="#book"
              className="mb-2 mr-2 rounded-lg border border-pink-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300"
            >
              Забронювати
            </a>
          </div>
        </section>

        <TracingBeam className="pl-6">
          <section id="details" className="container relative">
            <div className="relative grid grid-flow-row gap-5 pl-4 md:grid-cols-2">
              <div className="flex max-w-[320px] flex-col gap-2 self-start md:sticky md:top-8 md:max-w-[500px]">
                <h2 className="mb-5 text-start text-3xl font-bold md:text-4xl">
                  Теми конференції{" "}
                  <span
                    className={cn(
                      "absolute top-0 block h-7 w-7 scale-125 rounded-2xl bg-amber-100 blur-xl",
                    )}
                  />
                  <span
                    data-content={"конференции"}
                    className="relative block before:absolute before:inset-y-0 before:left-0 before:z-0 before:block before:w-full before:animate-gradient-background-1 before:bg-gradient-to-r before:from-pink-400 before:to-orange-300 before:bg-clip-text before:px-2 before:text-start before:text-transparent before:content-[attr(data-content)]"
                  >
                    <span className="animate-gradient-foreground-1 bg-gradient-to-r from-gradient-blue to-gradient-teal bg-clip-text px-2 text-start text-transparent">
                      конференции
                    </span>
                  </span>
                </h2>
                <ul className="list-none space-y-7">
                  {conferenceSpeakers.map((speaker) => {
                    return (
                      <li
                        className="text-start text-base font-light text-gray-100"
                        key={speaker.name}
                      >
                        <div className="text-lg font-bold text-white">
                          <div className="flex items-center gap-2 bg-gradient-to-r from-pink-400 to-orange-300 bg-clip-text text-transparent">
                            {speaker.name}
                            <svg
                              className="mr-2 h-3.5 w-3.5 flex-shrink-0 text-green-500 dark:text-green-400"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                          </div>
                          <a
                            className="text-sm font-normal text-blue-100"
                            href={speaker.instagram}
                          >
                            @{speaker.instagram.split("/").pop()}
                          </a>
                        </div>
                        {speaker.topic}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <h2 className="text-start text-3xl font-bold text-white md:hidden md:text-4xl">
                <span
                  data-content={"Спикеры"}
                  className="relative mt-20 block before:absolute before:inset-y-0 before:left-0 before:z-0 before:block before:w-full before:animate-gradient-background-1 before:bg-gradient-to-r before:from-pink-400 before:to-orange-300 before:bg-clip-text before:px-2 before:text-start before:text-transparent before:content-[attr(data-content)]"
                >
                  <span className="animate-gradient-foreground-1 bg-gradient-to-r from-gradient-blue to-gradient-teal bg-clip-text px-2 text-start text-transparent">
                    {"Спікери"}
                  </span>
                </span>
              </h2>
              <div className="grid grid-rows-3 gap-5">
                {conferenceSpeakers.map((speaker) => {
                  return (
                    <Card
                      key={speaker.name}
                      title={speaker.name}
                      description={speaker.description}
                      image={speaker.photo}
                      instagram={formatSubscribers(speaker.followersInstagram)}
                      ticktok={formatSubscribers(speaker.followersTikTok)}
                      youtube={formatSubscribers(speaker.followersYouTube)}
                    />
                  );
                })}
              </div>
            </div>
          </section>
          <section className="container mt-5 flex flex-col items-center justify-center gap-7 pb-12">
            <h2 className="mt-2 block max-w-[720px] px-5 text-center text-4xl font-extrabold md:text-5xl">
              <span
                data-content={"На тебе чекають"}
                className="relative block before:absolute before:inset-y-0 before:left-0 before:z-0 before:block before:w-full before:animate-gradient-background-1 before:bg-gradient-to-r before:from-pink-400 before:to-orange-300 before:bg-clip-text before:px-2 before:text-start before:text-transparent before:content-[attr(data-content)]"
              >
                <span className="animate-gradient-foreground-1 bg-gradient-to-r from-gradient-teal to-gradient-yellow bg-clip-text px-2 text-start text-transparent">
                  {"На тебе чекають"}
                </span>
              </span>
            </h2>
            {/* <ul className="space-y-5 text-start">
                <li className="flex gap-2">
                  <CheckIcon />
                  Розіграші подарунків від спонсорів заходу.
                </li>
                <li className="flex gap-2">
                  <CheckIcon />
                  Крутой нетворкинг со спикерами и участниками конференции
                </li>
                <li className="flex gap-2">
                  <CheckIcon />
                  Кофе-брейк и нереальная фото зона для твоего контента.
                </li>
              </ul> */}
            <p className="max-w-[500px] gap-2 px-5 text-center text-2xl">
              Розіграші подарунків від спонсорів заходу. Staleks_polska, Dїvna,
              JZ Nails Group{" "}
              {/* <span className="my-3 block text-4xl font-extrabold">МЕГА BOX</span>
                <span className="text-4xl font-extrabold uppercase">
                  на сумму{" "}
                  <span className="animate-gradient-x block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                    2000zł{" "}
                  </span>
                  <span className="block">от JZ Nails Group</span>
                </span> */}
            </p>
          </section>
          <section
            id="book"
            className="container relative mt-10 flex flex-col items-center justify-center gap-7 md:py-20"
          >
            <h2 className="block max-w-[720px] px-5 text-center text-3xl font-extrabold md:text-3xl">
              Встигни забронювати свій квиток на найбільш{" "}
              <span className="animate-gradient-x bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                ТРЕНДОВУ
              </span>{" "}
              конференцію цього року!
            </h2>
            <div className="flex flex-col gap-5 px-5 md:flex-row">
              <PricingCardVIP />
            </div>
          </section>
          <section className="container grid grid-cols-[1fr] gap-2">
            <div className="relative flex flex-col gap-5 pl-4">
              <div className="grid w-full grid-rows-2 gap-2 self-start md:grid-cols-[250px_1fr] md:grid-rows-1 md:justify-center md:justify-items-center">
                <div>
                  <h2 className="mb-10 text-start text-4xl font-bold md:text-4xl">
                    Чекаємо{" "}
                    <span className="animate-gradient-x bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">
                      на вас!
                    </span>{" "}
                  </h2>

                  <ul className="space-y-5">
                    <li>🗓 28 квітня</li>
                    <li>⏰ 10:00-19:00</li>
                    <li>📌 Centrum Konferencyjne WEST GATE</li>
                    <li>
                      <a
                        className="flex items-center justify-start gap-1 underline"
                        href="https://maps.app.goo.gl/6GR4TWbwjL9w6sfAA"
                      >
                        🗺️ Grzybowska 56, Warszawa
                      </a>
                    </li>
                    <li>До зустрічі на Nail Moment 2024!</li>
                  </ul>
                </div>
                <AnimatedPinDemo />
              </div>
            </div>
          </section>

          <section className="container relative my-10  md:my-2 md:pt-20">
            <h2 className="mb-5 text-center text-4xl font-bold md:text-4xl">
              <span className="animate-gradient-x bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">
                Наші спонсори
              </span>{" "}
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-7 pb-2">
              {/* <Sponsor src="/s1.png" href="https://instagram.com/4mani_shop" /> */}
              {/* <Sponsor src="/s2.png" href="https://instagram.com/konsulpro.pl" /> */}
              <Sponsor
                src="/s3.png"
                href="https://instagram.com/divna.official"
              />
              <Sponsor
                src="/s4.png"
                href="https://instagram.com/jznails_group"
              />
              <Sponsor
                src="/s5.png"
                href="https://instagram.com/staleks_polska"
              />
              {/* <Sponsor src="/s6.png" href="https://instagram.com/side.eu" /> */}
            </div>
          </section>
          <section className="container grid grid-rows-1 items-center justify-center justify-items-center gap-5 px-5 md:pt-12 ">
            <div className="mt-5 flex max-w-[320px] flex-col items-center justify-center gap-2 self-start md:mt-0 md:max-w-[500px]">
              <h2 className="text-center text-2xl font-bold md:text-2xl">
                Є питання?{" "}
              </h2>
              <p className="text-center">
                <a target="_blank" href="https://t.me/+THVRcBRhyWc5OWY0">
                  Напиши до нас в підтримку (__ссылка на телеграмм канал__)
                  <svg
                    className="ml-5 inline-block h-7 w-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlSpace="preserve"
                    style={{
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      strokeLinejoin: "round",
                      strokeMiterlimit: "1.41421",
                      color: "#0088cc",
                    }}
                  >
                    <path
                      id="telegram-1"
                      d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"
                    />
                  </svg>{" "}
                </a>
              </p>
            </div>
          </section>
        </TracingBeam>
        {/* <div className="pointer-events-none absolute bottom-0 left-0 z-20 h-[750px] w-full rotate-180 bg-pattern bg-cover bg-center bg-no-repeat" /> */}
        {/* <div className="pointer-events-none absolute bottom-0 left-0 z-20 h-[750px] w-full rotate-180 bg-stars bg-cover bg-center bg-no-repeat" /> */}
      </div>
    </main>
  );
}
