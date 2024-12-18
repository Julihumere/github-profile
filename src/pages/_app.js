import { GithubProvider } from "@/context/useGithub";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/github.png" />
        <title>Github profile</title>
      </Head>
      <GithubProvider>
        <Component {...pageProps} />;
      </GithubProvider>
    </>
  );
}
