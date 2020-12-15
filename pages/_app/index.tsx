import Head from "next/head";
import { useEffect } from "react";
import { AppProps } from "next/app";
import { Router } from "next/router";

import { PersistGate } from "redux-persist/integration/react";
import { initializeCategories } from "@redux/actions/site";
import { Provider as ReduxProvider } from "react-redux";
import { useStore } from "@redux/index";

import GlobalStyles from "@styles/GlobalStyles";
import Layout from "layout";

import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { setCookie } from "utils/cookies";
import { storage } from "constants/storageKeys";
import smoothScroll from "utils/smoothScroll";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

Router.events.on("routeChangeComplete", () => {
  console.log(window.innerWidth)
  if (window.innerWidth > 768) smoothScroll("title");
});

const App = ({ Component, pageProps }: AppProps) => {
  const { bannerVariant, initialStore } = pageProps;
  const { store, persistor } = useStore(undefined);

  // dispatch initial store
  useEffect(() => {
    const { categories } = initialStore;
    if (categories) {
      store.dispatch(initializeCategories(categories));
    }
    window.addEventListener("unload", () => {
      setCookie(storage.FILTERS, "[]");
      setCookie(storage.PRODUCTS, "[]");
    });
  }, []);

  // hide next data
  useEffect(() => {
    const data = document.querySelector("#__NEXT_DATA__");
    if (data) {
      data.remove();
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
