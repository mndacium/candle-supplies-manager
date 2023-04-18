import Head from 'next/head'

import { Inter } from 'next/font/google'


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
      <h1 className="text-3xl underline ">
      каталог свічок
    </h1>
      </main>
    </>
  )
}
