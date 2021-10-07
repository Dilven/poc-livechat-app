import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useMutation, useQueryClient } from "react-query";
import useAuth from "../hooks/useAuth";
import { useChatList } from "../hooks/useChatList";
import { Chat } from "../models/livechat";
import { Api } from "../services/api";
import styles from "../styles/Home.module.css";
import { Button } from "@livechat/design-system";

const Home: NextPage = () => {
  const { authData, singIn } = useAuth();
  const queryClient = useQueryClient();
  const { mutate: getReport } = useMutation(Api.getReport, {
    onSuccess: (data) => {
      queryClient.setQueryData("raport", data);
    },
  });

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
          <button
            onClick={(e) => {
              e.preventDefault();
              getReport("text");
            }}
          >
            Get chats
          </button>
        )}
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
