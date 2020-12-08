import Slider from "react-slick";

import { Text, Icon } from "@atoms";
import { Container } from "./styles";
import { SimilarProduct } from "../Product";
import { values as breakpoints } from "@styles/breakpoints";

// const BASE_URL = "/images/home/gallery";
const TOTAL_ITEMS = 5;

const Arrow = ({ currentSlide,slideCount, ...props }) => (
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
  const settings = {
    className: "prev-products",
    infinite: TOTAL_ITEMS > 4,
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
          centerMode: true,
          centerPadding: "20%",
        },
      },
    ],
  };

  return (
    <Container className={className}>
      <Text tag="h3" sz="larg" clr="primary">
        {title}
      </Text>
      <Slider {...settings}>
        {[...Array(TOTAL_ITEMS)].map((_, idx) => (
          <SimilarProduct key={idx} />
        ))}
      </Slider>
    </Container>
  );
};

export default PreviousViews;
