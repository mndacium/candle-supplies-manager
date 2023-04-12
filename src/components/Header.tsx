import Image from "next/image";
import { useState } from "react";

export interface IHeader {}

const Header: React.FC<IHeader> = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-2 bg-gray-200 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase "
              href="#pablo"
            >
              <Image
                src="/putinhuilo.png"
                width={190}
                height={60}
                alt = "logo"
              />
            </a>
            <button
              className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              123
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex   uppercase font-bold leading-snug  hover:opacity-75 button-animation"
                  href="#pablo"
                >
                  Про нас
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="px-3 py-2 flex   uppercase font-bold leading-snug  hover:opacity-75 button-animation"
                  href="#pablo"
                >
                  Новини та звіти
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex   uppercase font-bold leading-snug  hover:opacity-75 button-animation"
                  href="#pablo"
                >
                  Замовити свічки
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex   uppercase font-bold leading-snug  hover:opacity-75 button-animation"
                  href="#pablo"
                >
                  Увійти
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
