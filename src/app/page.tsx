import Buy from "~/components/buy";
import Card from "~/components/card";
import Contact from "~/components/contact";
import Countdown from "~/components/countdown";
import Gallery from "~/components/gallery";
import Line from "~/components/line";
import GoogleMap from "~/components/map";

export default function HomePage() {
  const slogan = ["Краса.", "Стиль.", "Бізнес."];
  return (
    <main
      style={{
        backgroundSize: "100% 25%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
      className="bg-pattern flex min-h-screen flex-col items-center justify-center pb-6 "
    >
      <div className="bg-pattern flex w-full flex-col gap-12 bg-[center_top_1rem] bg-no-repeat">
        <section className="container flex min-h-screen flex-col items-center justify-center gap-5">
          <h1 className="flex w-full select-none text-center text-8xl font-extrabold leading-none tracking-tighter max-lg:flex-col max-sm:text-[68px]">
            <span
              data-content={slogan[0]}
              className="before:animate-gradient-background-1 relative block before:absolute before:inset-y-0 before:left-0 before:z-0 before:block before:w-full before:px-2 before:text-center before:text-black before:content-[attr(data-content)]"
            >
              <span className="animate-gradient-foreground-1 from-gradient-blue to-gradient-teal bg-gradient-to-r bg-clip-text px-2 text-transparent">
                {slogan[0]}
              </span>
            </span>
            <span
              data-content={slogan[1]}
              className="before:animate-gradient-background-2 relative block before:absolute before:inset-y-0 before:left-0 before:z-0 before:block before:w-full before:px-2 before:text-center before:text-black before:content-[attr(data-content)]"
            >
              <span className="animate-gradient-foreground-2 from-gradient-purple to-gradient-pink bg-gradient-to-r bg-clip-text px-2 text-transparent">
                {slogan[1]}
              </span>
            </span>
            <span
              data-content={slogan[2]}
              className="before:animate-gradient-background-3 relative block before:absolute before:inset-y-0 before:left-0 before:z-0 before:block before:w-full before:px-2 before:text-center before:text-black before:content-[attr(data-content)]"
            >
              <span className="animate-gradient-foreground-3 from-gradient-red to-gradient-yellow bg-gradient-to-r bg-clip-text px-2 text-transparent">
                {slogan[2]}
              </span>
            </span>
          </h1>
          <h2 className="text-center text-2xl md:text-4xl">
            Розкрийте{" "}
            <span className="animate-gradient-x bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              потенціал
            </span>{" "}
            краси вашого бізнесу з кожним кліком
          </h2>
          <Buy />
        </section>
        <section className="container grid grid-cols-[15px_1fr] gap-2">
          <Line f={"a"} s={"b"} />
          <div className="relative grid grid-flow-row gap-5 pl-4 md:grid-cols-2">
            <div className="flex max-w-[320px] flex-col gap-2 self-start md:sticky md:top-8 md:max-w-[500px]">
              <h2 className="text-start text-4xl font-bold md:text-5xl">
                Розкрийте{" "}
                <span className="animate-gradient-x bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">
                  потенціал
                </span>{" "}
                краси
              </h2>
              <p className="text-start text-lg font-light text-black md:text-xl">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam,
              </p>
              <p className="text-start text-lg font-light text-black md:text-xl">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam,
              </p>
              <p className="text-start text-lg font-light text-black md:text-xl">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam,
              </p>
              <p className="text-start text-lg font-light text-black md:text-xl">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam,
              </p>
            </div>
            <div className="grid grid-rows-3 gap-5">
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </section>
        <section className="relative flex flex-col items-center justify-center gap-7 md:py-20">
          <h2 className="block max-w-[720px] px-5 text-center text-4xl font-extrabold md:text-5xl">
            Розкрийте{" "}
            <span className="animate-gradient-x bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              потенціал
            </span>{" "}
            краси вашого бізнесу з кожним кліком
          </h2>
          <Buy />
          <p className="w-[320px] text-center text-lg font-light text-black md:w-[720px] md:text-xl">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam,
          </p>
          <div className="-z-1 absolute left-[20%] top-0 h-[44%] w-[25%] rounded-[100%] bg-gradient-to-r from-cyan-500 to-pink-500 opacity-10 blur-xl" />
          <Countdown />
        </section>
        <section className="container grid grid-cols-[15px_1fr] gap-2">
          <Line f={"c"} s={"d"} />
          <div className="relative flex flex-col gap-5 pl-4">
            <div className="flex max-w-[320px] flex-col gap-2 self-start md:max-w-[500px]">
              <h2 className="text-start text-4xl font-bold md:text-5xl">
                Розкрийте{" "}
                <span className="animate-gradient-x bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">
                  потенціал
                </span>{" "}
                краси
              </h2>
              <p className="text-start text-lg font-light text-black md:text-xl">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam,
              </p>
            </div>
            <Gallery />
          </div>
        </section>
        <section className="container grid grid-rows-1 items-center justify-center justify-items-center gap-5 px-5 md:grid-cols-2 md:pt-12 ">
          <div className="flex max-w-[320px] flex-col items-center justify-center gap-2 self-start md:max-w-[500px]">
            <h2 className="text-center text-2xl font-bold md:text-2xl">
              Напишіть нам
            </h2>
            <p className="text-center text-lg font-light text-black md:text-xl">
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
            <p className="text-center text-lg font-light text-black md:text-start md:text-xl">
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
      </div>
    </main>
  );
}
