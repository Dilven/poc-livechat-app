import type { NextPage } from "next";
import Head from "next/head";
import { useLivechat, useLivechatDispatch } from "../hooks/useLivechat";
import styles from "../styles/Home.module.css";
import "@livechat/design-system/dist/design-system.css";
import { Button } from "@livechat/design-system";
import { ReportPanel } from "../components/ReportPanel";

const Home: NextPage = () => {
  console.log("app!");
  const { authData } = useLivechat();
  const { singIn } = useLivechatDispatch();
  return (
    <div className={styles.container}>
      <Head>
        <title>Sentiment App</title>
        <meta name="description" content="App for analyzing customer chats" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {!authData ? (
          <Button kind="primary" onClick={singIn}>
            Sign in
          </Button>
        ) : (
          <ReportPanel />
        )}
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
