import { Text, Image, Icon, Button } from "@atoms";
import { Sale } from "components/organisms/Product/Components";
import { useRouter } from "next/router";

const LeftBar = ({ data }) => {
  const router = useRouter();
  const { productImage, brandLogo, certificateImage } = data;

  const historyBack = () => {
    router.back();
  };

  return (
    <section className="leftBar">
      <Image
        responsive
        type="png"
        className="arrow-back"
        path="/images/product/arrow"
        onClick={historyBack}
        aria-label="back to filters"
      />
      <div className="images">
        <div className="product--wrapper">
          <img alt="product" src={productImage} />
          <Sale />
        </div>
        <div className="certificate">
          <img src={brandLogo} alt="gdf" />
          <div className="certificate--wrapper">
            <img alt="certificate" src={certificateImage} />
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default LeftBar;
