import Head from "next/head";
import Link from "next/link";
import { Inter } from "next/font/google";
import CandleCard from "@/components/CandleCard";
import AlertBubble from "@/components/AlertBubble";
import { ReactElement, useState } from "react";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [alertDownloadApp, setAlertDownloadApp] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>Каталог свічок</title>
        <meta name="description" content="Каталог свічок" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        {alertDownloadApp && (
          <div>
            <AlertBubble
            handleClosePopUp={setAlertDownloadApp}
              alertText={
                <>
                 <p className="text-2xl">
                  Ви впевненні що хочете завантажити{" "}
                  <a
                    className="text-phOrange"
                    download
                    href="CandleSuppliesManager.apk"
                  >
                    мобільний додаток
                  </a>
                  ?
                </p>
                <div className="my-12 lg:mt-4">

                <a
                  onClick={() => setAlertDownloadApp(false)}
                  className=" hover:cursor-pointer rounded-lg text-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 bg-phOrange duration-200  font-bold leading-none tracking-tight text-gray-900 py-3 px-8 m-2"
                  download
                  href="CandleSuppliesManager.apk"
                >
                  Так
                </a>
                <a
                  onClick={() => setAlertDownloadApp(false)}
                  className="hover:cursor-pointer rounded-lg text-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 bg-phOrange duration-200  font-bold leading-none tracking-tight text-gray-900 py-3 px-8  m-2"
                >
                  Ні
                </a>
                </div>
               
                </>
               
                

              }
            ></AlertBubble>
          </div>
        )}

        <div className="text-center">
          <h1 className="">Каталог свічок</h1>

          <h2 className="mt-12">
            Перед замовленням зверніть увагу на наші правила:
          </h2>
          <ul>
            <li className="mb-4">
              <p>
                <span className="mr-2 text-phOrange  text-4xl">-</span>
                Ми не надсилаємо свічки західніше Харківської області
              </p>
            </li>
            <li className="mb-4">
              <p>
                <span className="mr-2 text-phOrange  text-4xl">-</span>В нас не
                можна купити чи отримати свічки як сувеніри
              </p>
            </li>
            <li className="mb-4">
              <p>
                <span className="mr-2 text-phOrange text-4xl">-</span>
                Надсилаємо лише на фронт, не для домашнього господарства
              </p>
            </li>
            <li className="mb-4">
              <p>
                <span className="mr-2 text-phOrange  text-4xl">-</span>
                Замовлення відбувається лише через{" "}
                <button
                  onClick={() => setAlertDownloadApp(true)}
                  className="text-phOrange text-3xl"
                >
                  мобільний додаток
                </button>
              </p>
            </li>
          </ul>
        </div>
        <div className="w-[85%] mx-auto mt-10 flex flex-col lg:flex-row  justify-center">
          <CandleCard
            image="/small_candle.jpg"
            size="Мала"
            weight="80g"
            timeOfBurning="2 години"
            candleWidth="6сm"
            candleHeight="3.5сm"
          ></CandleCard>
          <CandleCard
            image="/mid_candle.jpg"
            size="Середня"
            weight="300g"
            timeOfBurning="3.5 години"
            candleWidth="8см"
            candleHeight="7см"
          ></CandleCard>
          <CandleCard
            image="/big_candle.jpg"
            size="Велика"
            weight="400g"
            timeOfBurning="4 години"
            candleWidth="10см"
            candleHeight="7сm"
          ></CandleCard>
        </div>
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
