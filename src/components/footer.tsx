const Footer = () => {
  return (
    <footer className="m-4 rounded-lg bg-gray-800 shadow">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-between p-4 md:flex-row">
        <div className="flex gap-4">
          <span className="text-sm text-gray-400">© 2023 Nail Moment</span>
          <span className="text-sm text-gray-400">Belmas Sp. z o. o.</span>
        </div>
        <ul className="flex flex-wrap items-center justify-center text-sm font-medium text-sky-500">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Polityka prywatności
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Publiczna umowa o świadczenie usług
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
