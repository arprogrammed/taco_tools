import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import styles from "@/styles/Worked.module.css";

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    const router = useRouter();

    const {query: {
        total,
    }} = router;

    const props = {total}

    const count = props.total?.toString();
    let value = true;
    if (!count) {
      value = true;
    } else {
      const countInt = parseInt(count);
      const truthy = () => {if(countInt <= 0){return true}else{return false}};
      value = truthy();
    }

  return (
    <>
      <Head>
        <title>You have Brigaded {props.total} Times!</title>
        <meta name="description" content="This results page will show you how many times you have brigaded in the last 24hrs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          {value ? <div className={styles.image}><Image src="/cook.png" width={350} height={350} alt="Get to Work" /><h2>Get to WORK!! - Condemnation from Chef Taco Ramsay</h2></div> : <div className={styles.image}><Image src="/taco.png" width={250} height={250} alt="Nice Work" /><h2>Nice WORK!! - Praise from the Illustrious Taco</h2></div> }
          <h1 className={styles.message}>You have worked {props.total} times in the past 24hrs!</h1>
          <h2>
            <Link href="/" className={styles.link}>⬅ Back to Home Page</Link>
          </h2>
        </div>
      </main>
    </>
  )
}
