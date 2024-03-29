import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';

import KYCForm from '../components/KYCForm';
import GHOBalance from '../components/GHOBalance';
import AccountInfo from '../components/AccountInfo';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  console.log(process.env, process.env.NEXT_PUBLIC_API_URL); // Outputs: https://yourapi.com

  return (
    <div className={styles.container}>
      <Head>
        <title>RainbowKit App</title>
        <meta
          content="Generated by @rainbow-me/create-rainbowkit"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
        <div className="App">
          {/* <AccountInfo /> */}
          <KYCForm />
        </div>
      </main>

    </div>
  );
};

export default Home;
