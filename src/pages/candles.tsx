import Head from 'next/head'

import { Inter } from 'next/font/google'
import CandleCard from '@/components/CandleCard'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Каталог свічок</title>
        <meta name="description" content="Каталог свічок" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='container'>
      <h1 className="text-3xl ">
      Каталог свічок
    </h1>
    <h2>Замовлення відбуваються лише через додаток</h2>
    <div className='w-[90%] mx-auto mt-10 flex justify-between'>
    <CandleCard image="/candle1.png" size="Mala" weight='80g' timeOfBurning='1s' ></CandleCard>
    <CandleCard image="/candle1.png" size="Mala" weight='80g' timeOfBurning='1s' ></CandleCard>
    <CandleCard image="/candle1.png" size="Mala" weight='80g' timeOfBurning='1s' ></CandleCard>
    </div>
    
      </main>
    </>
  )
}
