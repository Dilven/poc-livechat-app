import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import useAuth from '../hooks/useAuth'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const {
    authData,
    isLogged,
    isLogging,
  } = useAuth()
    console.log('transaction: ', authData)

  // const auth = async (e: any) => {
  //   if (e && e.preventDefault) {
  //     e.preventDefault();
  //   }
  //   const authorizeData = await instance.redirect().authorizeData()
  //   console.log('transaction: ', authorizeData)

  //   const transaction = instance.verify(authorizeData);

  //   console.log('transaction: ', transaction)
  //   if (transaction != null) {
  //     // authorization success
  //     // authorizeData contains `accessToken` or `code`
  //     // transation contains state and optional code_verifier (code + PKCE)
  //   }
  // }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
