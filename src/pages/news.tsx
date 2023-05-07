import Head from "next/head";

import { Inter } from "next/font/google";

import Link from "next/link";
import type { ReactElement } from 'react'
import Layout from "@/components/Layout";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  

  return (
    <>
      <Head>
        <title>Новини та звіти</title>
        <meta
          name="description"
          content="Викладення новин та звітів про волонтерьску діяльність"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <h1 className="text-center ">Новини та звіти</h1>
        <div className="text-center"><p>Щоб додавати новини необхідно зайти як  <Link href={"/login"} className="text-2xl  text-phOrange">адміністратор</Link></p></div>
        

      </main>
    </>
  );
}
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
     {page}
    </Layout>
  )
}