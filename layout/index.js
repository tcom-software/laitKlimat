import { useEffect } from "react";
import { Router } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { getLoader } from "@redux/selectors/loader";
import { toggleLoader } from "@redux/actions/loader";

import Chat from "./Chat";
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";

import Modal from "@organisms/Modal";
import Notification from "@molecules/Notification";
import { ChatContextProvider } from "./Chat/context";
import { initializeCategories } from "@redux/actions/site";
import { GlobalServices } from "api/GlobalServices";

const Layout = ({ children, data }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoader);
  const modalIsOpen = useSelector(state => state.modal.modalIsOpen);

  useEffect(() => {
    Router.events.on("routeChangeStart", () => dispatch(toggleLoader(true)));
    Router.events.on("routeChangeComplete", () =>
      dispatch(toggleLoader(false))
    );

    GlobalServices.getCategories().then(categories =>
      dispatch(initializeCategories(categories))
    );
  }, []);

  if (process.env.NODE_ENV === "production") {
    console.log = console.warn = console.error = () => {};
  }

  return (
    <>
      <Header data={{}} />
      <Banner variant={data.bannerVariant} />
      <main>{children}</main>
      <Footer />
      {modalIsOpen && <Modal />}
      <Notification />
      <ChatContextProvider>
        <Chat />
      </ChatContextProvider>
    </>
  );
};

export default Layout;
