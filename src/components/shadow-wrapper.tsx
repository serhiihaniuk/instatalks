export const BuyButton = () => {
  return (
    <div className="grid items-start justify-center gap-8">
      <div className="group relative">
        <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
        <span className="relative flex items-center rounded-lg border border-gray-500 bg-[#022016] px-7 py-4 text-lg font-normal leading-none">
          Забронювати
        </span>
      </div>
    </div>
  );
};
