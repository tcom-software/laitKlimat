import { Text, Image, Icon, Button } from "@atoms";
import { Sale } from "@organisms/Product/Common";
import { useRouter } from "next/router";

const LeftSide = ({ data }) => {
  const router = useRouter();
  const {
    price,
    brandLogo,
    productImage,
    certificateImage,
    categoryId,

    hasSale,
    priceWithSetup,
    priceWithoutSetup,
  } = data;

  const historyBack = () => {
    router.push({
      pathname: "/category",
      query: { c: categoryId, page: 1 },
    });
  };

  return (
    <section className="left-side">
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
          {Boolean(hasSale) && (
            <Sale
              data={{ priceWithSetup, priceWithoutSetup, hasSale, price }}
            />
          )}
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

export default LeftSide;
