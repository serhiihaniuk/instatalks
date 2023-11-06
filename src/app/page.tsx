import Card from "~/components/card";
import Line from "~/components/line";
import GoogleMap from "~/components/map";
import Image from "next/image";
import { cn } from "~/utils";
import {
  CheckIcon,
  PricingCardRegular,
  PricingCardVIP,
} from "~/components/pricing-card";
import Sponsor from "~/components/sponsor";

export default function HomePage() {
  return (
    <main
      style={{
        backgroundSize: "100% 25%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
      className="bg-pattern w-max-[100vw] relative flex min-h-screen flex-col items-center justify-center overflow-x-hidden pb-6 text-white "
    >
      <div className="bg-stars animate-r-360 pointer-events-none absolute left-0 top-0 z-20 h-[750px] w-full bg-cover bg-center bg-no-repeat" />
      <div className="bg-pattern flex w-full flex-col gap-12 bg-[center_top_1rem] bg-no-repeat">
        <section className="container flex min-h-screen flex-col items-center justify-center gap-5 bg-top">
          <div>
            <Image src="/main_logo.png" alt="" width={300} height={300} />
          </div>
          <h1 className="text-center text-2xl font-normal text-white">
            Конференция для мастеров маникюра и педикюра!
          </h1>
          <p className="text-center font-normal">🔥Nail Moment 2023🔥</p>
          <p className="max-w-[520px] px-5 text-center text-lg font-thin">
            конференция на которой ты узнаешь последнюю, трендовую информацию
            ногтевого мира, вдохновишся и поднимешь свои знания на новый
            уровень. Мы объединили самые актуальные темы, которые не может
            пропустить ни один nail мастер.{" "}
          </p>
        </section>
        <section className="container grid grid-cols-[15px_1fr] gap-2">
          <Line f={"c"} s={"d"} i={"icon2"} />
          <div className="relative grid grid-flow-row gap-5 pl-4 md:grid-cols-2">
            <div className="flex max-w-[320px] flex-col gap-2 self-start md:sticky md:top-8 md:max-w-[500px]">
              <h2 className="mb-5 text-start text-3xl font-bold md:text-4xl">
                Темы{" "}
                <span
                  className={cn(
                    "absolute top-0 block h-7 w-7 scale-125 rounded-2xl bg-amber-100 blur-xl",
                  )}
                />
                <span
                  data-content={"конференции"}
                  className="before:animate-gradient-background-1 relative block before:absolute before:inset-y-0 before:left-0 before:z-0 before:block before:w-full before:bg-gradient-to-r before:from-pink-400 before:to-orange-300 before:bg-clip-text before:px-2 before:text-start before:text-transparent before:content-[attr(data-content)]"
                >
                  <span className="animate-gradient-foreground-1 from-gradient-blue to-gradient-teal bg-gradient-to-r bg-clip-text px-2 text-start text-transparent">
                    конференции
                  </span>
                </span>
              </h2>
              <ul className="list-none space-y-7">
                <li className="text-start text-base font-light text-gray-100">
                  <div className="text-lg font-bold text-white">
                    <div className="flex items-center gap-2 bg-gradient-to-r from-pink-400 to-orange-300 bg-clip-text text-transparent">
                      Анастасия Коваленко
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
                      href="https://instagram.com/kohana__nails"
                    >
                      {" "}
                      @kohana__nails{" "}
                    </a>
                  </div>
                  Мастер Клас по укреплению ногтей твёрдыми материалами
                </li>
                <li className="text-start text-base font-light text-gray-100">
                  <div className="text-lg font-bold text-white">
                    <div className="flex items-center gap-2 bg-gradient-to-r from-pink-400 to-orange-300 bg-clip-text text-transparent">
                      Юлия Бельмас
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
                      href="https://instagram.com/yuliabelmas"
                    >
                      {" "}
                      @yuliabelmas{" "}
                    </a>
                  </div>
                  Как мастеру маникюра систематизировать свою работу и грамотно
                  считать финансы
                </li>
                <li className="text-start text-base font-light text-gray-100">
                  <div className="text-lg font-bold text-white">
                    <div className="flex items-center gap-2 bg-gradient-to-r from-pink-400 to-orange-300 bg-clip-text text-transparent">
                      Юлия Мартынова
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
                      href="https://instagram.com/podoestetyka.waw"
                    >
                      @podoestetyka.waw{" "}
                    </a>
                  </div>
                  Онихолизис. Что это такое. В чем опасность. Почему онихолизис
                  не отрастает. Ошибки в работе с онихолизисом мастера маникюра.
                  Когда можно протезировать и методы восстановления ногтей.
                  Тактика ведения клиента.
                </li>
                <li className="text-start text-base font-light text-gray-100">
                  <div className="text-lg font-bold text-white">
                    <div className="flex items-center gap-2 bg-gradient-to-r from-pink-400 to-orange-300 bg-clip-text text-transparent">
                      Оля Лягина
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
                      href="https://instagram.com/eendi_nails"
                    >
                      @eendi_nails
                    </a>
                  </div>
                  Мастер Клас по наращиванию на верхние формы
                </li>
                <li className="text-start text-base font-light text-gray-100">
                  <div className="text-lg font-bold text-white">
                    <div className="flex items-center gap-2 bg-gradient-to-r from-pink-400 to-orange-300 bg-clip-text text-transparent">
                      Ангелина Рагоза
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
                      href="https://instagram.com/angelina_nail_say"
                    >
                      @angelina_nail_say
                    </a>
                  </div>
                  5 секретов высокого прайса
                </li>
              </ul>
            </div>
            <h2 className="text-start text-3xl font-bold text-white md:hidden md:text-4xl">
              <span
                data-content={"Спикеры"}
                className="before:animate-gradient-background-1 relative mt-20 block before:absolute before:inset-y-0 before:left-0 before:z-0 before:block before:w-full before:bg-gradient-to-r before:from-pink-400 before:to-orange-300 before:bg-clip-text before:px-2 before:text-start before:text-transparent before:content-[attr(data-content)]"
              >
                <span className="animate-gradient-foreground-1 from-gradient-blue to-gradient-teal bg-gradient-to-r bg-clip-text px-2 text-start text-transparent">
                  {"Спикеры"}
                </span>
              </span>
            </h2>
            <div className="grid grid-rows-3 gap-5">
              <Card
                title="Анастасия Коваленко"
                description="Междунарондный инструктор JZ Nails Group."
                image="/b.jpg"
                instagram="13k"
              />
              <Card
                title="Юлия Бельмас"
                description="Бизнес-эксперт в салонном бизнесе, владелец ТОП студии во Вроцлаве, знаю как выйти с режима «белка в колесе» и систематизировать свою работу."
                image="/e.jpg"
                instagram="3.7k"
              />
              <Card
                title="Юлия Мартынова"
                description="Основатель центра подологии Podoestetyka, сооснователь курса старт в подологии. Эксперт в здоровье ногтей."
                image="/d.jpg"
                instagram="2.7k"
              />
              <Card
                title="Оля Лягина"
                description="Я забыла о нижних формах уже более чем на полгода. Не боюсь грызть ногти и с помощью верхних форм могу сделать носибельные ногти без сколов."
                image="/a.jpg"
                instagram="4.8k"
              />
              <Card
                title="Ангелина Рагоза"
                description="Та Самая TikTok Маникюрша из Варшавы, которая берет 250 зл за однотон 🤑. Мои ученики пилят БЫСТРО и ДОРОГО! Учу скоростному маникюру и как мастеру зарабатывать больше на ногтях."
                image="/c.jpg"
                instagram="7.2k"
                ticktok="12.8k"
              />
            </div>
          </div>
        </section>
        <section className="mt-5 flex flex-col items-center justify-center gap-7 pb-12">
          <h2 className="mt-2 block max-w-[720px] px-5 text-center text-4xl font-extrabold md:text-5xl">
            <span
              data-content={"Тебя ждут"}
              className="before:animate-gradient-background-1 relative block before:absolute before:inset-y-0 before:left-0 before:z-0 before:block before:w-full before:bg-gradient-to-r before:from-pink-400 before:to-orange-300 before:bg-clip-text before:px-2 before:text-start before:text-transparent before:content-[attr(data-content)]"
            >
              <span className="animate-gradient-foreground-1 from-gradient-teal to-gradient-yellow bg-gradient-to-r bg-clip-text px-2 text-start text-transparent">
                {"Тебя ждут"}
              </span>
            </span>
          </h2>
          <p className="container px-10 text-center text-lg font-light text-white">
            <ul className="space-y-5 text-start">
              <li className="flex gap-2">
                <CheckIcon />
                Подарки от наших спонсоров на сумму свыше 200zł
              </li>
              <li className="flex gap-2">
                <CheckIcon />
                Крутой нетворкинг со спикерами и участниками конференции
              </li>
              <li className="flex gap-2">
                <CheckIcon />
                Кофе-брейк и нереальная фото зона для твоего контента.
              </li>
              <li className="flex gap-2 font-bold">
                <CheckIcon />А также розыгрыши боксов с подарками от наших
                спонсоров Staleks_polska, Dїvna и МЕГА BOX на сумму 2000 зл от
                JZ Nails Group
              </li>
            </ul>
          </p>
        </section>
        <section className="relative flex flex-col items-center justify-center gap-7 md:py-20">
          <h2 className="block max-w-[720px] px-5 text-center text-3xl font-extrabold md:text-3xl">
            Успей забронировать свой билет на самую{" "}
            <span className="animate-gradient-x bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              ТРЕНДОВУЮ
            </span>{" "}
            конференцию этого года!
          </h2>
          <div className="flex flex-col-reverse gap-5 px-5 md:flex-row">
            <PricingCardRegular />
            <PricingCardVIP />
          </div>
        </section>
        <section className="container grid grid-cols-[15px_1fr] gap-2">
          <Line f={"c"} s={"d"} i={"icon2"} />
          <div className="relative flex flex-col gap-5 pl-4">
            <div className="grid w-full grid-rows-2 gap-2 self-start md:grid-cols-[250px_1fr] md:grid-rows-1 md:justify-center md:justify-items-center">
              <div>
                <h2 className="mb-10 text-start text-4xl font-bold md:text-4xl">
                  Ждем{" "}
                  <span className="animate-gradient-x bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">
                    вас
                  </span>{" "}
                </h2>

                <ul className="space-y-5">
                  <li>🗓 26 ноября</li>
                  <li>⏰ 10:00-19:00</li>
                  <li>📌 ZADN Centrum Konferencyjne </li>
                  <li>
                    <a
                      className="flex items-center justify-start gap-1"
                      href="https://www.google.com/maps/place/Grzybowska+56,+00-844+Warszawa/@52.2353079,20.9857485,17z/data=!3m1!4b1!4m6!3m5!1s0x471ecc843e6d7709:0x3ed6c17870f01967!8m2!3d52.2353079!4d20.9883234!16s%2Fg%2F11csp1h2kv?entry=ttu"
                    >
                      🗺️ Grzybowska 56, Warszawa
                    </a>
                  </li>
                  <li>До встречи на Nail Moment 2023!</li>
                </ul>
              </div>
              <div className="mt-5 flex items-center justify-center md:mt-0">
                <a
                  className="flex flex-col items-center justify-start gap-1 md:pl-20"
                  href="https://www.google.com/maps/place/Grzybowska+56,+00-844+Warszawa/@52.2353079,20.9857485,17z/data=!3m1!4b1!4m6!3m5!1s0x471ecc843e6d7709:0x3ed6c17870f01967!8m2!3d52.2353079!4d20.9883234!16s%2Fg%2F11csp1h2kv?entry=ttu"
                  target="_blank"
                >
                  <Image
                    src="/map.png"
                    alt=""
                    width={300}
                    height={300}
                    className="h-[80%] w-full rounded-lg"
                  />
                  <GoogleMap />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="container grid grid-rows-1 items-center justify-center justify-items-center gap-5 px-5 md:grid-cols-2 md:pt-12 ">
          <div className="flex max-w-[320px] flex-col items-center justify-center gap-2 self-start md:max-w-[500px]">
            <h2 className="text-center text-2xl font-bold md:text-2xl">
              Будь на связи!
            </h2>
            <p className="text-center">
              Переходи в телеграм канал.
              <a href="https://t.me/+NXNyzuGV84AxYzdk" target="_blank">
                <svg
                  className="mx-3 inline-block h-7 w-7"
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
              Там будет вся актуальная информация по поводу конференции.
            </p>
          </div>
          <div className="mt-5 flex max-w-[320px] flex-col items-center justify-center gap-2 self-start md:mt-0 md:max-w-[500px]">
            <h2 className="text-center text-2xl font-bold md:text-2xl">
              Есть вопросы?{" "}
            </h2>
            <p className="text-center">
              Напиши нам в поддержку!
              <a target="_blank" href="https://t.me/+THVRcBRhyWc5OWY0">
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
        <section className="container relative my-10 flex flex-wrap items-center justify-center gap-7 pb-12 md:my-2 md:py-20">
          <Sponsor src="/s1.png" href="https://instagram.com/4mani_shop" />
          <Sponsor src="/s2.png" href="https://instagram.com/konsulpro.pl" />
          <Sponsor src="/s3.png" href="https://instagram.com/divna.official" />
          <Sponsor src="/s4.png" href="https://instagram.com/jznails_group" />
          <Sponsor src="/s5.png" href="https://instagram.com/staleks_polska" />
          <Sponsor src="/s6.png" href="https://instagram.com/side.eu" />
        </section>
        <div className="bg-stars pointer-events-none absolute bottom-0 left-0 z-20 h-[750px] w-full rotate-180 bg-cover bg-center bg-no-repeat" />
      </div>
    </main>
  );
}
