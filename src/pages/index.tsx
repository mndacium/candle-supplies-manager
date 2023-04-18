import Head from 'next/head'

import { Inter } from 'next/font/google'
import Slider from '@/components/Slider'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Окопні свічки</title>
        <meta name="description" content="Головна сторінка" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='container text-center'>
      <h1 className="">Про нас</h1>
      <h2 className=''>Вітаємо на нашому сайті!</h2>
<p className="">    

Ми родина волонтерів, яка з жовтня 2022-го року передає "тепло" захисникам на передовій.

Ми виготовляємо окопні свічки та розпалювачі, використовуючи гофрокартон, косметичні спонжі та харчовий парафін (який закупаємо коштом родини та за ваші донати). 

ЗСУ-котики кажуть, що наші свічки майже не коптять і мають гарну тепловіддачу.

Наша мета — зігріти й усміхнути, тому на кожній свічці є листівка з авторським котиком та побажання для воїнів.
</p>
<Slider slides={["/putinhuilo.png"]}></Slider>
      </main>
    </>
  )
}
