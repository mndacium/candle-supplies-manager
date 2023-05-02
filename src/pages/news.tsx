import Head from "next/head";

import { Inter } from "next/font/google";
import LoginButton from "@/components/LoginButton";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { initFirebase } from "@/firebase/config";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  initFirebase();
  const auth = getAuth();
  const signIn = async (phone: string, password: string) => {
    const result = signInWithEmailAndPassword(auth, phone, password);
    console.log(result)
  };

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
        <button onClick={()=>signIn("pamapolya@gmail.com","Ja17nuary")}>login</button>

      </main>
    </>
  );
}
