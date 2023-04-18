import Head from 'next/head'

import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Логін</title>
        <meta name="description" content="Сторінка логіну" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='container'>
      <h1 className="text-3xl underline ">
      Логін
    </h1>
      </main>
    </>
  )
}
