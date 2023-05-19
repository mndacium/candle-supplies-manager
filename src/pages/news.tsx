import Head from "next/head";
import { useState } from "react";
import { Inter } from "next/font/google";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initFirebase } from "@/firebase/config";
import Link from "next/link";
import type { ReactElement } from "react";
import Layout from "@/components/Layout";
import Graphic from "@/components/Graphic";
import AlertBubble from "@/components/AlertBubble";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const auth = getAuth();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth.currentUser
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    setIsLoading(false);
  });
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
      {isLoading ? (
        <div className=" flex justify-center items-center">
          <h1 className="">Loading...</h1>

        </div>
        ) : (
          <>
            <h1 className="text-center">Новини та звіти</h1>

            <div className="mx-auto w-[60vw] h-[45vh]">
              <Graphic></Graphic>
            </div>
            {!isAuthenticated && (
              <AlertBubble
                alertText={
                  <p className="text-2xl">
                    Щоб додавати новини необхідно зайти як{" "}
                    <Link href={"/login"} className="text-2xl  text-phOrange">
                      адміністратор
                    </Link>
                  </p>
                }
              ></AlertBubble>
            )}
          </>
        )}
        
      </main>
    </>
  );
}
Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};



