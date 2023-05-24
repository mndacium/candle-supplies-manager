import Head from "next/head";
import { useState } from "react";
import { Inter } from "next/font/google";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { ReactElement, useEffect } from "react";
import Layout from "@/components/Layout";
import Graphic from "@/components/Graphic";
import AlertBubble from "@/components/AlertBubble";
import PostComponent from "@/components/PostComponent";
import { IPost, Post } from "@/models/IPost";
import ParaphineCreationForm from "@/components/ParaphineCreateForm";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [posts, setPosts] = useState<IPost[]>();
  const [isParaphineCreation, setIsParaphineCreation] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  async function getPosts() {
    try {
      const response = await fetch(
        "https://zsu-candles-api.pp.ua/Post/GetAllPosts"
      );
      const responseJson = await response.json();
      const parsedData: IPost[] = responseJson.data.map(
        (x: any) => new Post(x)
      );

      setPosts(parsedData);
    } catch (error) {
      console.log("There was an error", error);
    }
  }
  useEffect(() => {
    // getPosts();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setIsLoading(false);
    });
  }, []);
  const auth = getAuth();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth.currentUser
  );

  
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
            <h1 className="text-center mb-8">Новини та звіти</h1>
            {isAuthenticated && isParaphineCreation == false && (
              <div className="flex justify-center items-center">
                <h2 className="m-4">Додати новий звіт по парафіну</h2>

                <button
                  onClick={()=>
                    setIsParaphineCreation(true)

                  
                  }
                  className="rounded-lg  transition ease-in-out hover:-translate-y-1 hover:scale-110 bg-phOrange duration-200  font-bold leading-none tracking-tight text-gray-900 p-2"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="h-[40px] w-[40px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                </button>
              </div>
            )}
            {isParaphineCreation ? (
              // Show ParaphineCreationForm
              <div className="mx-auto text-center max-w-5xl h-[45vh] mb-12">
                <ParaphineCreationForm />
              </div>
            ) : (
              // Show Graphic component
              <div className="mx-auto text-center max-w-5xl h-[45vh] mb-12">
                <h2 className="mb-8">Витрати парафіну</h2>
                <Graphic />
              </div>
            )}

            {isAuthenticated && (
              <div className="flex justify-center items-center">
                <h2 className="m-4">Додати новий пост</h2>

                <button className="rounded-lg  transition ease-in-out hover:-translate-y-1 hover:scale-110 bg-phOrange duration-200  font-bold leading-none tracking-tight text-gray-900 p-2">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="h-[40px] w-[40px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                </button>
              </div>
            )}
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
            <div className="flex justify-center items-center flex-col">
              {posts &&
                posts.map((post, index) => (
                  <>
                    <PostComponent
                      image={post.presignedLink}
                      description={post.post.description}
                      username={post.post.username}
                      created={post.post.created}
                      isLeftSided={index % 2 === 0}
                      key={post.post.id}
                    />
                  </>
                ))}
            </div>
          </>
        )}
      </main>
    </>
  );
}
Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
