import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
          <div className="container">
            <h1>About CryptoX</h1>
            <p>
              CryptoX is Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Id itaque nemo, libero ea tempora, quaerat quo ducimus quasi
              suscipit debitis excepturi, laudantium provident non quidem
              repudiandae voluptate mollitia quibusdam sed.
            </p>
          </div>
        </Layout>
      </main>
    </div>
  );
}
