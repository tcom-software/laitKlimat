import { useEffect } from "react";
import { Router } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { getLoader } from "@redux/selectors/loader";
import { toggleLoader } from "@redux/actions/loader";

import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import Chat from "./Chat";

import Modal from "@organisms/Modal";
import Notification from "@molecules/Notification";

const Layout = ({ children, data }) => {
  const dispatch = useDispatch();
  const isloading = useSelector(getLoader);
  const modalIsOpen = useSelector(state => state.modal.modalIsOpen);
  const { bannerVariant } = data;

  useEffect(() => {
    Router.events.on("routeChangeStart", () => dispatch(toggleLoader(true)));
    Router.events.on("routeChangeComplete", () =>
      dispatch(toggleLoader(false))
    );
  }, []);

  return (
    <>
      <Header data={{}} />
      <Banner variant={bannerVariant} />
      <main>{children}</main>
      <Footer />
      {modalIsOpen && <Modal />}
      <Notification />
      <Chat />
    </>
  );
};

export default Layout;
