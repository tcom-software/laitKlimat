import Header from "./Header";
import Footer from "./Footer";
import { Banner } from "@organisms";

const Layout = ({ children, bannerVariant }) => {
  return (
    <>
      <Header />
      <Banner variant={bannerVariant} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
