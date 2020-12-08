import { useEffect } from "react";
import { Router } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import Header from "./Header";
import Footer from "./Footer";
import { Banner, Modal } from "@organisms";
import { getLoader } from "@redux/selectors/loader";
import { toggleLoader } from "@redux/actions/loader";

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
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--animation-name",
      isloading ? "loader" : ""
    );
  }, [isloading]);

  return (
    <>
      <Header data={{}} />
      <Banner variant={bannerVariant} />
      <main>{children}</main>
      <Footer />
      {modalIsOpen && <Modal />}
    </>
  );
};

export default Layout;
