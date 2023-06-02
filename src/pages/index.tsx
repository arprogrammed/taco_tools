import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Taco Tools</title>
        <meta name="description" content="Taco tools are designed to use history API for ease of use blockchain tools." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>🌮 Taco Tools 🌮</h1>
          <p>This is my hobby project that I use to tinker with WAX chain tools and APIs. Check out the salad spinner to see how many times you have brigaded in the last 24hrs. Or peruse my NFTs for sale in show me your assets. Enjoy!</p>
          <Link className={styles.mainButton} href="/lookup">Show Me Your Salad Spinner!</Link>
          <Link className={styles.mainButton} href="/forsale">Show Me Your Assets!</Link>
        </div>
        <div className={styles.description_1}>
          <div className={styles.container}>
            <Image src="/fork.png" width={300} height={300} alt="Fork" />
            <Image className={styles.forks} src="/fork.png" width={300} height={300} alt="Fork" />
          </div>
        </div>
      </main>
    </>
  )
}
