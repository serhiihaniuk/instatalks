export const Faq = () => {
  return (
    <div className="mx-auto max-w-lg space-y-6">
      <div className="space-y-2">
        <h3 className="text-xl">Як купити квиток?</h3>
        <p className="font-light text-gray-300">
          Ви можете купити квиток через сайт чи через дірект.
        </p>
      </div>
      <div className="space-y-2">
        <h3 className="text-xl">Як отримати фактуру?</h3>
        <p className="font-light text-gray-300">Щоб отримати фактуру напишіть нам в дірект.</p>
      </div>
      <div className="space-y-2">
        <h3 className="text-xl">
          Я купив(ла) квиток, але змінилися плани і я хочу повернути кошти
        </h3>
        <p className="font-light text-gray-300">
          Повернення квитка можливе не пізніше ніж за 14 днів до дати проведення заходу. В разі якщо
          лишилося менш ніж 14 днів до події:
        </p>
        <ul className="list-disc pl-5 font-light text-gray-300">
          <li>повернення коштів можливе в разі розпродажу усіх квитків, включно із вашим</li>
          <li>ми лишаємо за вами право на перепродаж квитка</li>
        </ul>
      </div>
    </div>
  );
};
