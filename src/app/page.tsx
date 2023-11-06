import Buy from "~/components/buy";
import Card from "~/components/card";
import Contact from "~/components/contact";
import Countdown from "~/components/countdown";
import Gallery from "~/components/gallery";
import Line from "~/components/line";
import GoogleMap from "~/components/map";
import Image from "next/image";
import { colors } from "tailwindcss/defaultTheme";
import { cn } from "~/utils";

export default function HomePage() {
  const slogan = ["Краса.", "Стиль.", "Бізнес."];
  return (
    <main
      style={{
        backgroundSize: "100% 25%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
      className="bg-pattern relative flex min-h-screen flex-col items-center justify-center pb-6 text-white "
    >
      <div className="bg-stars pointer-events-none absolute left-0 top-0 z-20 h-[750px] w-full bg-cover bg-center bg-no-repeat" />
      <div className="bg-pattern flex w-full flex-col gap-12 bg-[center_top_1rem] bg-no-repeat">
        <section className="container flex min-h-screen flex-col items-center justify-center gap-5 bg-top">
          <div>
            <Image src="/main_logo.png" alt="" width={300} height={300} />
          </div>
          <h1 className="text-2xl font-normal text-white">
            Конференция для мастеров маникюра и педикюра!
          </h1>
          <p className="max-w-[520px] text-center text-lg font-thin">
            <span className="font-normal">🔥Nail Moment 2023🔥</span> - это
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
              <h2 className="text-start text-3xl font-bold md:text-4xl">
                Темы{" "}
                <span
                  className={cn(
                    "absolute top-0 block h-7 w-7 scale-125 rounded-2xl bg-amber-100 blur-xl",
                  )}
                />
                <span className="animate-gradient-x bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                  конференции
                </span>{" "}
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
            <div className="grid grid-rows-3 gap-5">
              <Card
                title="Анастасия Коваленко"
                description="Междунарондный инструктор JZ Nails Group."
                image="/b.jpg"
                instagram="13k"
              />
              <Card
                title="Юлия Бельмас"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,"
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
                description="Самая дорогая Маникюрша Варшавы. Маникюр однотон 250 зл
"
                image="/c.jpg"
                instagram="7.2k"
                ticktok="12.8k"
              />
            </div>
          </div>
        </section>
        <section className="relative flex flex-col items-center justify-center gap-7 md:py-20">
          <h2 className="block max-w-[720px] px-5 text-center text-4xl font-extrabold md:text-4xl">
            Розкрийте{" "}
            <span className="animate-gradient-x bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              потенціал
            </span>{" "}
            краси вашого бізнесу з кожним кліком
          </h2>
          <Buy />
          <p className="w-[320px] text-center text-lg font-light text-white md:w-[720px] md:text-xl">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam,
          </p>
          <div className="-z-1 absolute left-[20%] top-0 h-[44%] w-[25%] rounded-[100%] bg-gradient-to-r from-cyan-500 to-pink-500 opacity-10 blur-xl" />
          <Countdown />
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
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <a
                  className="flex flex-col items-center justify-start gap-1"
                  href="https://www.google.com/maps/place/Grzybowska+56,+00-844+Warszawa/@52.2353079,20.9857485,17z/data=!3m1!4b1!4m6!3m5!1s0x471ecc843e6d7709:0x3ed6c17870f01967!8m2!3d52.2353079!4d20.9883234!16s%2Fg%2F11csp1h2kv?entry=ttu"
                >
                  <Image
                    src="/map.png"
                    alt=""
                    width={300}
                    height={300}
                    className="h-[70%] w-[90%] rounded-lg"
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
              Напишіть нам
            </h2>
            <p className="text-center text-lg font-light text-white md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam,
            </p>
          </div>
          <Contact />
        </section>
        <section className="container grid grid-rows-1 items-center justify-center justify-items-center gap-5 px-5 md:grid-cols-2 md:pb-12 ">
          <div className="flex max-w-[320px] flex-col items-center justify-center gap-2 self-start md:max-w-[500px]">
            <h2 className="text-center text-2xl font-bold md:text-start md:text-2xl">
              Як нас знайти
            </h2>
            <p className="text-center text-lg font-light text-white md:text-start md:text-xl">
              {" "}
              Rynek 1, 50-106 Wrocław
            </p>
          </div>
          <GoogleMap />
        </section>
        <section className="flex flex-col items-center justify-center gap-7 pb-12">
          <h2 className="block max-w-[720px] px-5 text-center text-4xl font-extrabold md:text-5xl">
            Розкрийте{" "}
            <span className="animate-gradient-x bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              потенціал
            </span>{" "}
            краси вашого бізнесу з кожним кліком
          </h2>
          <Buy />
        </section>
        <div className="bg-stars pointer-events-none absolute bottom-0 left-0 z-20 h-[750px] w-full rotate-180 bg-cover bg-center bg-no-repeat" />
      </div>
    </main>
  );
}
