import React from "react";

const Navbar = () => {
  return (
    <header>
      <div className="flex justify-between">
        <div className="flex items-center gap-5 px-2 md:px-0">
          <img src="./img/logo.png" alt="logo" className="h-20 md:h-auto" />
          <ul className="hidden md:flex gap-5">
            <li className="hover:text-green-500 cursor-pointer">Главная</li>
            <li className="hover:text-green-500 cursor-pointer">Студио</li>
            <li className="hover:text-green-500 cursor-pointer">Проекты</li>
            <li className="hover:text-green-500 cursor-pointer">Контакты</li>
          </ul>
        </div>
        <div className="flex items-center gap-2 md:gap-5 mr-2 md:mr-0">
          <img src="./img/search.png" alt="search-img" className="w-7 h-7" />
          <button className="button">Нанять</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
