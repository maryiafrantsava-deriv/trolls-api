import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/common/Layout";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Head>
      <title>Deriv.com API</title>
      <meta
        name="description"
        content="Build your own trading platform, powered by the Deriv API. We use WebSockets for fast, two-way messaging between your apps and our trading services."
      />
      <link rel="icon" href="/deriv.png" />
    </Head>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
