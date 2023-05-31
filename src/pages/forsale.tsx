import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Market from "@/comps/market"
import { Inter } from "next/font/google";
import styles from "@/styles/LaFStore.module.css";

const inter = Inter({ subsets: ["latin"] })

export default function Forsale() {

  return (
    <>
      <Head>
        <title>La Fajita Store!</title>
        <meta name="description" content="My Atomic Asset powered storefront!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>🌮 Le Shoop! 🌮</h1>
          <p>Click the items below to grab them from the market!</p>
          <h3>
          <Link href="/" className={styles.link}>⬅ Back to Home Page</Link>
        </h3>
        </div>
        <div className={styles.keepercontainer}>
            <Market />
        </div>
      </main>
    </>
  );
}
