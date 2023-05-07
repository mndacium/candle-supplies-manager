import Head from "next/head";
import Link from "next/link";
import { Inter } from "next/font/google";
import CandleCard from "@/components/CandleCard";

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
        <div className="text-center">
          <h1 className="">Каталог свічок</h1>
          <h2 className="">
            Замовлення відбуваються лише через{" "}
            <Link className="text-phOrange" href="https://www.google.com">
              додаток
            </Link>
          </h2>
        </div>
        <div className="w-[90%] mx-auto mt-10 flex flex-col lg:flex-row  justify-center">
          <CandleCard
            image="/candle1.png"
            size="Мала"
            weight="80g"
            timeOfBurning="1s"
            candleWidth="15cm"
            candleHeight="25cm"
          ></CandleCard>
          <CandleCard
            image="/candle1.png"
            size="Середня"
            weight="300g"
            timeOfBurning="2s"
            candleWidth="16cm"
            candleHeight="26cm"
          ></CandleCard>
          <CandleCard
            image="/candle1.png"
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