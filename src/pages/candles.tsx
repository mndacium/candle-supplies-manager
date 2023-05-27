import Head from "next/head";
import Link from "next/link";
import { Inter } from "next/font/google";
import CandleCard from "@/components/CandleCard";
import AlertBubble from "@/components/AlertBubble";
import type { ReactElement } from "react";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Каталог свічок</title>
        <meta name="description" content="Каталог свічок" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <AlertBubble
          alertText={
            <p className="text-2xl">
              Замовлення відбуваються лише через{" "}
              <Link className="text-phOrange" href="https://www.google.com">
                додаток
              </Link>
            </p>
          }
        ></AlertBubble>
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
                <span className="mr-2 text-phOrange  text-4xl">-</span>В нас не можна
                купити чи отримати свічки як сувеніри
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
                <Link className="text-phOrange text-3xl" href="https://www.google.com">
                  додаток
                </Link>
              </p>
            </li>
          </ul>
        </div>
        <div className="w-[90%] mx-auto mt-10 flex flex-col lg:flex-row  justify-center">
          <CandleCard
            image="/small_candle.jpg"
            size="Мала"
            weight="80g"
            timeOfBurning="1s"
            candleWidth="15cm"
            candleHeight="25cm"
          ></CandleCard>
          <CandleCard
            image="/mid_candle.jpg"
            size="Середня"
            weight="300g"
            timeOfBurning="2s"
            candleWidth="16cm"
            candleHeight="26cm"
          ></CandleCard>
          <CandleCard
            image="/big_candle.jpg"
            size="Велика"
            weight="400g"
            timeOfBurning="3s"
            candleWidth="17cm"
            candleHeight="27cm"
          ></CandleCard>
        </div>
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
