import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
export interface IHeader {}
import { useRouter } from 'next/router';

const Header: React.FC<IHeader> = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const router = useRouter();
  const { pathname } = router;
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-1  bg-slate-300 mb-7">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              href="/"
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercas"
            >
              {" "}
              <Image src="/putinhuilo.png" width={170} height={60} alt="logo" />
            </Link>

            <button
              className=" cursor-pointer relative group text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => {
                console.log(navbarOpen);
                setNavbarOpen(!navbarOpen);
              }}
            >
              <div className="relative flex overflow-hidden items-center justify-center  w-[50px] h-[50px] transform transition-all bg-slate-400 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                  {!navbarOpen && (
                    <>
                      <div className="bg-slate-700 h-[2px] w-10 transform transition-all duration-300 origin-left "></div>
                      <div className="bg-slate-700 h-[2px] w-10 rounded transform transition-all duration-300 delay-75"></div>
                      <div className="bg-slate-700 h-[2px] w-10 transform transition-all duration-300 origin-left delay-150"></div>
                    </>
                  )}
                  {navbarOpen && (
                    <>
                      <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                        <div className="absolute bg-slate-700 h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                        <div className="absolute bg-slate-700 h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                      </div>
                    </>
                  )}
                </div>
              </div>
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
                <Link
                  href="/"
                  className="px-3 py-4 flex relative uppercase font-bold leading-snug hover:opacity-75 lg:button-animation"
                >
                  
                  <div className="opacity-0 hover:opacity-75 absolute h-full bg-phOrange top-0 left-[-25vw] right-0 w-[150vw] z-0 lg:hidden"></div>
                  <div className="z-1 relative ">Про нас</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/news"
                  className="px-3 py-4 flex relative uppercase font-bold leading-snug hover:opacity-75 lg:button-animation"
                >
                  <div className="opacity-0 hover:opacity-75 absolute h-full bg-phOrange top-0 left-[-25vw] right-0 w-[150vw] z-0 lg:hidden"></div>
                  <div className="z-1 relative">Новини та звіти</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/candles"
                  className="px-3 py-4 flex relative uppercase font-bold leading-snug hover:opacity-75 lg:button-animation"
                >
                  <div className="opacity-0 hover:opacity-75 absolute h-full bg-phOrange top-0 left-[-25vw] right-0 w-[150vw] z-0 lg:hidden"></div>
                  <div className="z-1 relative"> Замовити свічки</div>
                </Link>
              </li>
              
              {pathname.includes("/news") && (<>
                <li className="nav-item">
                <Link
                  href="/login"
                  className="px-3 py-4 flex relative uppercase font-bold leading-snug hover:opacity-75 lg:button-animation"
                >
                  <div className="opacity-0 hover:opacity-75 absolute h-full bg-phOrange top-0 left-[-25vw] right-0 w-[150vw] z-0 lg:hidden"></div>
                  <div className="z-1 relative"> Зайти як адміністратор</div>
                </Link>
              </li>
              </>)}
              <li className="nav-item lg:hidden">
                <Link
                  href="/donate"
                  className="px-3 py-4 flex relative uppercase font-bold leading-snug hover:opacity-75 lg:button-animation"
                >
                  <div className="bg-phOrange opacity-75  absolute h-full top-0 left-[-25vw] right-0 w-[150vw] z-0 lg:hidden"></div>
                  <div className="z-1 relative"> Задонатити на парафін</div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
