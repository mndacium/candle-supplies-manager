import Head from 'next/head'

import { Inter } from 'next/font/google'
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { initFirebase } from "@/firebase/config";
import { useRouter } from 'next/navigation';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  initFirebase();
  const auth = getAuth();
  const signIn = async (phone: string, password: string) => {
    try{
      const result = signInWithEmailAndPassword(auth, phone, password).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        router.push('/news')
        // ...
      });
    }
    catch(error){
      console.log(error)
    }
   
    
  };
  return (
    <>
      <Head>
        <title>Логін</title>
        <meta name="description" content="Сторінка логіну" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
     </>

  )}
