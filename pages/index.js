import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import CryptoList from "@/components/CryptoList";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ coins }) {
  console.log(coins);
  return (
    <div>
      <Head>
        <title>Crypto app</title>
        <meta name="description" content="Crypto Price Updates" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout>
          <Hero />
          <CryptoList coins={coins.coins} />
        </Layout>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(
    "https://api.coinstats.app/public/v1/coins?skip=0&limit=10"
  );
  const data = await response.json();

  return {
    props: {
      coins: data,
    },
  };
};
