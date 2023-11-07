const ConferenceInfo = () => {
  return (
    <div className="grow">
      <div className="mx-auto mt-10 max-w-2xl rounded-lg bg-gray-900 p-8 text-gray-100 shadow-lg">
        <h2 className="mb-5 text-center text-xl font-semibold">
          Добро пожаловать на конференцию Nail Moment 2023!
        </h2>
        <div className="mb-6">
          <p className="mb-4">
            Переходи в телеграм канал ⬇️ Там будет вся актуальная информация по
            поводу конференции.
            <a
              href="https://t.me/+NXNyzuGV84AxYzdk"
              className="ml-2 inline-block text-blue-500 hover:text-blue-300"
            >
              Telegram Channel
            </a>
          </p>
          <p>
            Если будут вопросы пишите в поддержку ⬇️
            <a
              href="https://t.me/+THVRcBRhyWc5OWY0"
              className="ml-2 inline-block text-blue-500 hover:text-blue-300"
            >
              Support
            </a>
          </p>
        </div>
        <div className="mb-6">
          <p className="font-medium">
            <span role="img" aria-label="Calendar">
              🗓
            </span>{" "}
            26 ноября
          </p>
          <p className="font-medium">
            <span role="img" aria-label="Clock">
              ⏰
            </span>{" "}
            10:00-19:00
          </p>
          <p className="font-medium">
            <span role="img" aria-label="Location">
              📌
            </span>{" "}
            ZADN Centrum Konferencyjne, Grzybowska 56, Warszawa
          </p>
        </div>
        <div className="text-center">
          <p className="mb-4">До встречи на Nail Moment 2023!</p>
          <p className="text-sm text-gray-400">С уважением,</p>
          <p className="text-sm text-gray-400">организаторы конференции.</p>
        </div>
      </div>
    </div>
  );
};

export default ConferenceInfo;
