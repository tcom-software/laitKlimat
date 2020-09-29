import { Text, Image, Icon, Button } from "@atoms";
import { Sale } from "components/organisms/Product/Sale";

const LeftBar = () => {
  return (
    <section className="leftBar">
      <Image
        responsive
        type="png"
        className="arrow-back"
        path="/images/product/arrow"
      />
      <div className="images">
        <div className="product--wrapper">
          <img alt="product" src="/images/product/product-big.png" />
          <Sale />
        </div>
        <div className="certificate">
          <img src="/images/product/logo-big.jpg" alt="gdf" />
          <div className="certificate--wrapper">
            <img alt="certificate" src="/images/certificates/certificate.jpg" />
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default LeftBar;
