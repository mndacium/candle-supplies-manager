import Head from 'next/head'

import { Inter } from 'next/font/google'

import LoginForm from '@/components/LoginForm';
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
      <div className="bg-gray-100 min-h-screen flex justify-center items-center "><LoginForm/></div>
      
     </>

  )}
