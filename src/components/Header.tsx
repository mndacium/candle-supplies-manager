import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
export interface IHeader {}
import { useRouter } from "next/router";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { initFirebase } from "@/firebase/config";

const Header: React.FC<IHeader> = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const router = useRouter();
  const { pathname } = router;
  initFirebase();
  const auth = getAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(!!auth.currentUser);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
  }, [auth]);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setIsAuthenticated(false); // Update the authentication state
      })
      .catch((error) => {
        console.log("Sign out error:", error);
      });
  };
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-1  bg-slate-300 mb-7 overflow-x-hidden">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between w-full">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              href="/"
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase "
            >
              {" "}
              <Image src="/putinhuilo.png" width={170} height={60} alt="logo" />
            </Link>

            <button
              className=" cursor-pointer relative group text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
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
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto ">
            <li className="nav-item">
                <Link
                  href="/"
                  className=" lg:px-3 py-4 flex relative uppercase font-bold leading-snug  lg:button-animation"
                  onClick={() => setNavbarOpen(false)}
                >
                  <div className="opacity-0 hover:opacity-75 absolute h-full bg-phOrange top-0 left-[-25vw] right-0 w-[125vw]  z-0 lg:hidden"></div>
                  <div className="z-1 relative">Про нас</div>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/news"
                  className=" lg:px-3 py-4 flex relative uppercase font-bold leading-snug  lg:button-animation"
                  onClick={() => setNavbarOpen(false)}
                >
                  <div className="opacity-0 hover:opacity-75 absolute h-full bg-phOrange top-0 left-[-25vw] right-0 w-[125vw] z-0 lg:hidden"></div>
                  <div className="z-1 relative">Новини та звіти</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/candles"
                  className=" lg:px-3 py-4 flex relative uppercase font-bold leading-snug  lg:button-animation"
                  onClick={() => setNavbarOpen(false)}
                >
                  <div className="opacity-0 hover:opacity-75 absolute h-full bg-phOrange top-0 left-[-25vw] right-0 w-[125vw] z-0 lg:hidden"></div>
                  <div className="z-1 relative"> Замовити свічки</div>
                </Link>
              </li>

              {(pathname.includes("/news") || isAuthenticated) && (
                <>
                  <li className="nav-item">
                    {isAuthenticated ? (
                      // Render the link for authenticated users
                      <button
                        onClick={handleSignOut}
                        className=" py-4 flex relative uppercase font-bold leading-snug hover:opacity-75 lg:button-animation"
                      >
                        <div className="opacity-0 hover:opacity-75 absolute h-full bg-phOrange top-0 left-[-25vw] right-0 w-[125vw] z-0 lg:hidden"></div>
                        <div className="z-1 relative">Вийти з аккаунту</div>
                      </button>
                    ) : (
                      <Link
                        href="/login"
                        className=" lg:px-3 py-4 flex relative uppercase font-bold leading-snug hover:opacity-75 lg:button-animation"
                        onClick={() => setNavbarOpen(false)}
                      >
                        <div className="opacity-0 hover:opacity-75 absolute h-full bg-phOrange top-0 left-[-25vw] right-0 w-[125vw] z-0 lg:hidden"></div>
                        <div className="z-1 relative">
                          Зайти як адміністратор
                        </div>
                      </Link>
                    )}
                  </li>
                </>
              )}
              <li className="nav-item lg:hidden ">
                <Link
                
                  href="https://send.monobank.ua/jar/2xKEJ87NXq"
                  className=" lg:px-3 py-4 flex relative uppercase font-bold leading-snug hover:opacity-75 lg:button-animation"
                  onClick={() => setNavbarOpen(false)}
                >
                  <div className="bg-phOrange opacity-75  absolute h-full top-0 left-[-25vw] right-0 w-[125vw] z-0 lg:hidden"></div>
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
