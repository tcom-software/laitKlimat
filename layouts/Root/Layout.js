import Header from "./Header";
import Footer from "./Footer";
import { Banner, Modal } from "@organisms";

const Layout = ({ children, bannerVariant, modalIsOpen }) => {
  return (
    <>
      <Header />
      <Banner variant={bannerVariant} />
      <main>{children}</main>
      <Footer />
      {modalIsOpen && <Modal />}
    </>
  );
};

export default Layout;
