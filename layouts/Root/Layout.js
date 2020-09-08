import Header from "./Header";
import Footer from "./Footer";
import { Banner } from "@organisms";

const Layout = ({ children, bannerVariant }) => {
  return (
    <>
      <Header />
      <Banner variant={bannerVariant} />

      {children}
      <Footer />
    </>
  );
};

export default Layout;
