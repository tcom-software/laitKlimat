import { memo, useMemo } from "react";
import Slider from "react-slick";

import { Text, Icon } from "@atoms";
import { Container } from "./styles";
import { SimilarProduct } from "../Product";
import { values as breakpoints } from "@styles/breakpoints";
import { getCachedProducts } from "@redux/selectors/products";
import { useDispatch, useSelector } from "react-redux";

// const BASE_URL = "/images/home/gallery";
const TOTAL_ITEMS = 5;

const Arrow = ({ currentSlide, slideCount, ...props }) => (
  <button {...props}>
    <Icon name="arrow" />
  </button>
);

/**
 * Gallery component
 * @param {Object} props - props
 * @returns {React.Node} - gallery component
 */
const PreviousViews = ({
  className = "",
  title = "Ваши предыдущие просмотры",
}) => {
  const dispatch = useDispatch();
  const products = useSelector(getCachedProducts());
  const len = useMemo(() => Object.keys(products).length, [products]);

  const settings = useMemo(
    () => ({
      className: "prev-products",
      infinite: len > 4,
      slidesToShow: 4,
      speed: 500,
      autoplay: false,
      prevArrow: <Arrow />,
      nextArrow: <Arrow />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            arrows: true,
          },
        },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 2,
            arrows: true,
          },
        },
        {
          breakpoint: breakpoints.xs,
          settings: {
            arrows: false,
            slidesToShow: 1,
            centerMode: len >= 3,
            centerPadding: "20%",
          },
        },
      ],
    }),
    [len]
  );

  const productsArray = Object.values(products);

  return (
    <Container className={className}>
      <Text tag="h3" sz="larg" clr="primary">
        {title}
      </Text>
      {productsArray.length ? (
        <Slider {...settings}>
          {productsArray.map((product, idx) => (
            <SimilarProduct key={idx} data={product} />
          ))}
        </Slider>
      ) : (
        <Text tag="p" sz="normal" clr="tercary" className="no_products">
          нет продуктов
        </Text>
      )}
    </Container>
  );
};

export default PreviousViews;
