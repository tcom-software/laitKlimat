import Head from "next/head";
import { useEffect } from "react";
import { AppProps } from "next/app";
import { Router } from "next/router";

import { useStore } from "@redux/index";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import GlobalStyles from "@styles/GlobalStyles";
import Layout from "layout";

import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { setCookie } from "utils/cookies";
import smoothScroll from "utils/smoothScroll";
import { storage } from "constants/storageKeys";

Router.events.on("routeChangeError", () => NProgress.done());
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());

Router.events.on("routeChangeComplete", () => {
  if (window.innerWidth > 768) smoothScroll("title");
});

import "@styles/scss/index.scss";
import "slick-carousel/slick/slick.css";

const App = ({ Component, pageProps }: AppProps) => {
  const { bannerVariant } = pageProps;
  const { store, persistor } = useStore(undefined);

  useEffect(() => {
    window.addEventListener("pagehide", () => {
      setCookie(storage.FILTERS, "[]");
      setCookie(storage.PRODUCTS, "[]");
    });
  }, []);

  // --- hide next data
  useEffect(() => {
    const data = document.querySelector("#__NEXT_DATA__");
    if (data) {
      data.remove();
    }
  }, []);

  return (
    <>
      <Head>
        <title>ЛАЙТ КЛИМАТ</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <GlobalStyles />
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout data={{ bannerVariant }}>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </ReduxProvider>
    </>
  );
};

export default App;
