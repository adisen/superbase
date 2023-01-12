import Head from "next/head";
import Image from "next/image";
import Collectibles from "../components/Collectibles";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Partners from "../components/Partners";

export default function Home() {
  return (
    <>
      <Head>
        <title>Superare</title>
        <meta
          name="description"
          content="Discover and collect super rare NFTs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black text-white">
        <Navbar />
        <Hero />
        <Partners />
        <Collectibles />
      </main>
    </>
  );
}
