import Head from "next/head";
import { useStore } from "@redux/index";
import { persistStore } from "redux-persist";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Layout from "../layouts/Root";
import GlobalStyles from "@styles/GlobalStyles";

const MyApp = ({ Component, pageProps }) => {
  const { bannerVariant, initialReduxState } = pageProps;
  const store = useStore(initialReduxState);
  const persistor = persistStore(store, {}, function () {
    persistor.persist();
  });

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyles />
      <ReduxProvider store={store}>
        <PersistGate loading={<div>loading</div>} persistor={persistor}>
          <Layout bannerVariant={bannerVariant}>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </ReduxProvider>
    </>
  );
};

export default MyApp;
