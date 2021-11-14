import "styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "components/common/Header/Header";
import Footer from "components/common/Footer";
import { ComponentWithLayout } from "../types";

const EmptyLayout: React.FC = ({ children }) => <div id="zalupa">{children}</div>;

type MyApp = AppProps & {
  Component: ComponentWithLayout
}

const MyApp = ({ Component, pageProps }: MyApp) => {
  const Layout = Component.Layout || EmptyLayout;

  return (
    <>
      <Head>
        <title>Deriv.com API</title>
        <meta
          name="description"
          content="Build your own trading platform, powered by the Deriv API. We use WebSockets for fast, two-way messaging between your apps and our trading services."
        />
        <link rel="icon" href="/deriv.png" />
      </Head>
      <Header />
        <div className="main-content">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      <Footer />
    </>
  )
};

export default MyApp;
