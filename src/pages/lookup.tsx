import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { printStatus, printActions24hr } from "@/lib/actions";
import { useState } from "react";
import Router from "next/router";
import styles from '@/styles/Lookup.module.css';

interface Opts {
  healthCheck: Check;
  // totalWorked: Work;
}

type Check = {
  status: string;
};

/* This type setting was used for brining in the total worked.
   Left this in as note for example of setting a type in an interface
   with the purpose of passing to a destructuring framework in the function params. */
// type Work = {
//   total: number;
// };

export default function Lookup({ healthCheck}: Opts) {
  const [user, setUser] = useState("");

  function handleSubmit(e: { preventDefault: () => void; }){
    e.preventDefault();

    const countData = async () =>  {
      const userWam = {
        wam: user,
      };
      const response = await fetch("/api/count", {
        method: "POST",
        body: JSON.stringify(userWam),
      });
      return response.json();
    };

    countData().then((data)=>{
      Router.push({
        pathname: '/worked',
        query: {
          total: data.total,
        },
      });
    });
  };

  return (
      <>
      <Head>
        <title>How Many Times?!</title>
        <meta name="description" content="Search how many times you've brigaded in the last 24hrs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>The WAX Endpoint Status Is: {healthCheck.status}</h1>
          <p>If the endpoint status is not OK then you'll not be able to run the check below!</p>
        </div>
        <Image src="/brigade_hellmutt.png" width={300} height={250} alt="Brigadier HellMutt" />
        <p className={styles.imgCap}>THE Brigadier Hellmutt!</p>
        <div>
          <form className={styles.formWallet} onSubmit={handleSubmit}>
            <label htmlFor="userLabel">Enter WAX Wallet</label>
            <input id="user" type="text" value={user} onChange={(e) => setUser(e.target.value)} placeholder="tqzke.c.wam" />
            <button type="submit" className={styles.mainButton}>Submit</button>
          </form>
        </div>
        <h2>
          <Link href="/" className={styles.link}>⬅ Back to Home Page</Link>
        </h2>
      </main>
      </>
  );
}

export async function getStaticProps() {
  const healthCheck = await printStatus();

  return {
    props: {
      healthCheck
    }
  }
}
