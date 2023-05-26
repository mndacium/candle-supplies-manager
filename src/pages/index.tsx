import Head from "next/head";

import { Inter } from "next/font/google";
import Slider from "@/components/Slider";
import type { ReactElement } from "react";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Окопні свічки</title>
        <meta name="description" content="Головна сторінка" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container text-center">
        <h1 className="">Про нас</h1>
        <h2 className="">Вітаємо на нашому сайті!</h2>
        <p className="mb-8">
          Ми родина волонтерів, яка з жовтня 2022-го року передає
          &quot;тепло&quot; захисникам на передовій. Ми виготовляємо окопні
          свічки та розпалювачі, використовуючи гофрокартон, косметичні спонжі
          та харчовий парафін (який закупаємо коштом родини та за ваші донати).
          ЗСУ-котики кажуть, що наші свічки майже не коптять і мають гарну
          тепловіддачу. Наша мета — зігріти й усміхнути, тому на кожній свічці є
          листівка з авторським котиком та побажання для воїнів.
        </p>
        <Slider slides={["/putinhuilo.png"]}></Slider>
        <h2 className="mt-12">Чому саме наші свічки?</h2>
        <ul>
          <li className="mb-4">
            <p>
              <span className="mr-2 text-phOrange">✓</span>
              Заливаємо лише харчовим парафіном, тому свічки майже не коптять
            </p>
          </li>
          <li className="mb-4">
            <p>
              <span className="mr-2 text-phOrange">✓</span>
              Скручуємо модифікованим &quot;равликом&quot;, тому свічки мають гарну
              тепловіддачу
            </p>
          </li>
          <li className="mb-4">
            <p>
              <span className="mr-2 text-phOrange text-3xl">✓</span>
              Швидко надсилаємо та ведемо прозору звітність
            </p>
          </li>
          <li className="mb-4">
            <p>
              <span className="mr-2 text-phOrange">✓</span>
              Робимо свічки з любов&apos;ю, щоб і зігріти, й усміхнути
              котиків-захисників
            </p>
          </li>
        </ul>
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
