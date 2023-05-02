import Image from "next/image";
import { useState } from "react";
import Link from 'next/link'
export interface IHeader {}

const Header: React.FC<IHeader> = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-1  bg-slate-300 mb-7">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
           
              <Link href="/" className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercas"> <Image
                src="/putinhuilo.png"
                width={170}
                height={60}
                alt = "logo"
              /></Link>
             
          
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
              <Link href="/" className="px-3 py-2 flex   uppercase font-bold leading-snug  hover:opacity-75 button-animation">Про нас</Link>
                
              </li>
              <li className="nav-item ">
              <Link href="/news" className="px-3 py-2 flex   uppercase font-bold leading-snug  hover:opacity-75 button-animation">  Новини та звіти</Link>
              
              </li>
              <li className="nav-item">
              <Link href="/candles" className="px-3 py-2 flex   uppercase font-bold leading-snug  hover:opacity-75 button-animation"> Замовити свічки</Link>
                
              </li>
   
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
