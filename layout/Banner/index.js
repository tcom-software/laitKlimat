import React, { Fragment, useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";

const Circle = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={153}
    height={153}
    fill="none"
    {...props}
  >
    <circle
      cx={76.5}
      cy={76.5}
      r={69}
      stroke="#fff"
      strokeOpacity={0.15}
      strokeWidth={15}
    />
  </svg>
);

const Group1 = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={136}
    viewBox="0 0 38 136"
    fill="none"
    {...props}
  >
    <circle cx="5" cy="47" r="5" />
    <circle cx="5" cy="61" r="5" />
    <circle cx="5" cy="33" r="5" />
    <circle cx="5" cy="75" r="5" />
    <circle cx="5" cy="19" r="5" />
    <circle cx="5" cy="89" r="5" />
    <circle cx="5" cy="103" r="5" />
    <circle cx="5" cy="117" r="5" />
    <circle cx="19" cy="47" r="5" />
    <circle cx="5" cy="4.99997" r="5" />
    <circle cx="19" cy="61" r="5" />
    <circle cx="19" cy="33" r="5" />
    <circle cx="19" cy="75" r="5" />
    <circle cx="19" cy="19" r="5" />
    <circle cx="33" cy="75" r="5" />
    <circle cx="33" cy="47" r="5" />
    <circle cx="33" cy="61" r="5" />
    <circle cx="33" cy="33" r="5" />
    <circle cx="33" cy="89" r="5" />
    <circle cx="33" cy="103" r="5" />
    <circle cx="19" cy="89" r="5" />
    <circle cx="19" cy="103" r="5" />
    <circle cx="19" cy="117" r="5" />
    <circle cx="5" cy="131" r="5" />
  </svg>
);

const Group2 = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={65}
    height={152}
    viewBox="0 0 65 152"
    {...props}
  >
    <circle r="6.18421" transform="matrix(-1 0 0 1 40.8155 41.1316)" />
    <circle r="6.18421" transform="matrix(-1 0 0 1 40.8155 58.4474)" />
    <circle r="6.18421" transform="matrix(-1 0 0 1 40.8155 23.8158)" />
    <circle r="6.18421" transform="matrix(-1 0 0 1 40.8155 75.7632)" />
    <circle r="6.18421" transform="matrix(-1 0 0 1 40.8155 6.50001)" />
    <circle r="6.18421" transform="matrix(-1 0 0 1 40.8155 93.079)" />
    <circle r="6.18421" transform="matrix(-1 0 0 1 40.8155 110.395)" />
    <circle r="6.18421" transform="matrix(-1 0 0 1 40.8155 127.71)" />
    <circle r="6.18421" transform="matrix(-1 0 0 1 40.8155 145.026)" />
    <circle r="6.18421" transform="matrix(-1 0 0 1 23.4997 41.1316)" />
    <circle r="6.18421" transform="matrix(-1 0 0 1 23.4997 58.4474)" />
    <circle r="6.18421" transform="matrix(-1 0 0 1 23.4997 23.8158)" />
    <circle r="6.18421" transform="matrix(-1 0 0 1 23.4997 75.7632)" />
    <path d="M17.3155 6.50001C17.3155 9.91545 20.0843 12.6842 23.4997 12.6842C26.9152 12.6842 29.684 9.91545 29.684 6.50001C29.684 3.08456 26.9152 0.315796 23.4997 0.315796C20.0843 0.315796 17.3155 3.08456 17.3155 6.50001Z" />
    <circle r="6.18421" transform="matrix(-1 0 0 1 6.18395 75.7632)" />
    <circle r="6.18421" transform="matrix(-1 0 0 1 6.18395 41.1316)" />
    <circle r="6.18421" transform="matrix(-1 0 0 1 6.18395 24.1842)" />
    <circle r="6.18421" transform="matrix(-1 0 0 1 6.18395 58.4474)" />
    <circle r="6.18421" transform="matrix(-1 0 0 1 6.18395 93.079)" />
    <circle r="6.18421" transform="matrix(-1 0 0 1 6.18395 110.395)" />
    <circle r="6.18421" transform="matrix(-1 0 0 1 23.4997 93.079)" />
    <circle r="6.18421" transform="matrix(-1 0 0 1 23.4997 110.395)" />
    <circle r="6.18421" transform="matrix(-1 0 0 1 23.4997 127.71)" />
    <ellipse cx="58.1842" cy="41.1328" rx="6.18421" ry="6.18433" />
    <ellipse cx="58.1842" cy="58.4489" rx="6.18421" ry="6.18433" />
    <ellipse cx="58.1842" cy="23.8166" rx="6.18421" ry="6.18433" />
    <ellipse cx="58.1842" cy="75.765" rx="6.18421" ry="6.18433" />
    <ellipse cx="58.1842" cy="6.5005" rx="6.18421" ry="6.18433" />
    <ellipse cx="58.1842" cy="93.0812" rx="6.18421" ry="6.18433" />
    <ellipse cx="58.1842" cy="110.397" rx="6.18421" ry="6.18433" />
  </svg>
);

const Group3 = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={51}
    height={131}
    viewBox="0 0 51 131"
    {...props}
  >
    <circle cx="5" cy="28" r="5" />
    <circle cx="5" cy="42" r="5" />
    <circle cx="5" cy="56" r="5" />
    <circle cx="5" cy="70" r="5" />
    <circle cx="5" cy="84" r="5" />
    <circle cx="5" cy="98" r="5" />
    <circle cx="5" cy="14" r="5" />
    <circle r="4.94664" transform="matrix(1 0 0 -1 17.9466 83.8575)" />
    <circle r="4.94664" transform="matrix(1 0 0 -1 17.9466 70.0068)" />
    <circle r="4.94664" transform="matrix(1 0 0 -1 17.9466 97.7081)" />
    <circle r="4.94664" transform="matrix(1 0 0 -1 17.9466 56.1563)" />
    <circle r="4.94664" transform="matrix(1 0 0 -1 17.9466 111.559)" />
    <circle r="4.94664" transform="matrix(1 0 0 -1 17.9466 42.3057)" />
    <circle r="4.94664" transform="matrix(1 0 0 -1 17.9466 28.4551)" />
    <circle r="4.94664" transform="matrix(1 0 0 -1 17.9466 14.6045)" />
    <circle r="4.94664" transform="matrix(1 0 0 -1 31.7972 83.8575)" />
    <circle r="4.94664" transform="matrix(1 0 0 -1 17.9466 125.409)" />
    <circle r="4.94664" transform="matrix(1 0 0 -1 31.7972 70.0068)" />
    <circle r="4.94664" transform="matrix(1 0 0 -1 31.7972 97.7081)" />
    <circle r="4.94664" transform="matrix(1 0 0 -1 31.7972 56.1563)" />
    <circle r="4.94664" transform="matrix(1 0 0 -1 31.7972 111.559)" />
    <circle r="4.94664" transform="matrix(1 0 0 -1 45.6478 56.1563)" />
    <circle r="4.94664" transform="matrix(1 0 0 -1 45.6478 83.8575)" />
    <circle r="4.94664" transform="matrix(1 0 0 -1 45.6478 70.0068)" />
    <circle r="4.94664" transform="matrix(1 0 0 -1 45.6478 97.7081)" />
    <circle r="4.94664" transform="matrix(1 0 0 -1 45.6478 42.3057)" />
    <circle r="4.94664" transform="matrix(1 0 0 -1 45.6478 28.4551)" />
    <circle r="4.94664" transform="matrix(1 0 0 -1 31.7972 42.3057)" />
    <circle r="4.94664" transform="matrix(1 0 0 -1 31.7972 28.4551)" />
    <circle r="4.94664" transform="matrix(1 0 0 -1 31.7972 14.6045)" />
    <circle r="4.94664" transform="matrix(1 0 0 -1 17.9466 0.753919)" />
  </svg>
);

const Group4 = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={65}
    height={150}
    viewBox="0 0 65 150"
    {...props}
  >
    <circle
      cx="41.3217"
      cy="109.155"
      r="6.11822"
      transform="rotate(-180 41.3217 109.155)"
    />
    <circle
      cx="41.3217"
      cy="92.0244"
      r="6.11822"
      transform="rotate(-180 41.3217 92.0244)"
    />
    <circle
      cx="41.3217"
      cy="126.286"
      r="6.11822"
      transform="rotate(-180 41.3217 126.286)"
    />
    <circle
      cx="41.3217"
      cy="74.8934"
      r="6.11822"
      transform="rotate(-180 41.3217 74.8934)"
    />
    <circle
      cx="41.3217"
      cy="143.417"
      r="6.11822"
      transform="rotate(-180 41.3217 143.417)"
    />
    <circle
      cx="41.3217"
      cy="57.7624"
      r="6.11822"
      transform="rotate(-180 41.3217 57.7624)"
    />
    <circle
      cx="41.3217"
      cy="40.6314"
      r="6.11822"
      transform="rotate(-180 41.3217 40.6314)"
    />
    <circle
      cx="41.3217"
      cy="23.5004"
      r="6.11822"
      transform="rotate(-180 41.3217 23.5004)"
    />
    <circle
      cx="41.3217"
      cy="6.36943"
      r="6.11822"
      transform="rotate(-180 41.3217 6.36943)"
    />
    <circle
      cx="24.1906"
      cy="109.155"
      r="6.11822"
      transform="rotate(-180 24.1906 109.155)"
    />
    <circle
      cx="24.1906"
      cy="92.0244"
      r="6.11822"
      transform="rotate(-180 24.1906 92.0244)"
    />
    <circle
      cx="24.1906"
      cy="74.8934"
      r="6.11822"
      transform="rotate(-180 24.1906 74.8934)"
    />
    <circle
      cx="7.05952"
      cy="74.8934"
      r="6.11822"
      transform="rotate(-180 7.05952 74.8934)"
    />
    <circle
      cx="7.05952"
      cy="92.0244"
      r="6.11822"
      transform="rotate(-180 7.05952 92.0244)"
    />
    <circle
      cx="7.05952"
      cy="57.7624"
      r="6.11822"
      transform="rotate(-180 7.05952 57.7624)"
    />
    <circle
      cx="7.05952"
      cy="40.6314"
      r="6.11822"
      transform="rotate(-180 7.05952 40.6314)"
    />
    <circle
      cx="24.1906"
      cy="57.7624"
      r="6.11822"
      transform="rotate(-180 24.1906 57.7624)"
    />
    <circle
      cx="24.1906"
      cy="40.6314"
      r="6.11822"
      transform="rotate(-180 24.1906 40.6314)"
    />
    <circle
      cx="24.1906"
      cy="23.5004"
      r="6.11822"
      transform="rotate(-180 24.1906 23.5004)"
    />
    <ellipse
      rx="6.11821"
      ry="6.11834"
      transform="matrix(1 0 0 -1 58.5049 109.154)"
    />
    <ellipse
      rx="6.11821"
      ry="6.11834"
      transform="matrix(1 0 0 -1 58.5049 92.0229)"
    />
    <ellipse
      rx="6.11821"
      ry="6.11834"
      transform="matrix(1 0 0 -1 58.5049 126.286)"
    />
    <ellipse
      rx="6.11821"
      ry="6.11834"
      transform="matrix(1 0 0 -1 58.5049 74.8916)"
    />
    <ellipse
      rx="6.11821"
      ry="6.11834"
      transform="matrix(1 0 0 -1 58.5049 143.417)"
    />
    <ellipse
      rx="6.11821"
      ry="6.11834"
      transform="matrix(1 0 0 -1 58.5049 57.7603)"
    />
    <ellipse
      rx="6.11821"
      ry="6.11834"
      transform="matrix(1 0 0 -1 58.5049 40.6289)"
    />
  </svg>
);

import Text from "@atoms/Text";
import Image from "@atoms/Image";
import Button from "@atoms/Button";

import { useFetch } from "@hooks";
import { useRouter } from "next/router";
import { Container, Section } from "./styles";
import { getProductImage } from "helper/getProductImage";
import { makeProductName } from "helper/serializeProduct";
import { GET_TOP_PRODUCTS, UPLOADS_URL } from "constants/api";
import ButtonAddToBasket from "@atoms/Button/ButtonAddToBasket";

const variants = ["primary", "secondary", "tercary"];

const defaultPhotos = [
  {
    id: 1206,
    price: "",
    name: " ",
    img: "./images/banner/1206.png",
  },
  {
    id: 5542,
    price: "",
    name: " ",
    img: "./images/banner/5542.png",
  },
  {
    id: 926,
    price: 45,
    name: " ",
    img: "./images/banner/926.png",
  },
];

const defaultSettings = {
  speed: 1500,
  arrows: false,
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Banner = ({ variant }) => {
  const router = useRouter();
  const [photos, setPhotos] = useState(defaultPhotos);
  const { data, loading } = useFetch(GET_TOP_PRODUCTS);

  useEffect(() => {
    data &&
      setPhotos(() =>
        data.map(({ id, price, ...rest }) => ({
          id,
          price,
          name: makeProductName(rest),
          img: `${UPLOADS_URL}/${getProductImage(rest)}`,
        }))
      );
  }, [data]);

  const addBasketCallBack = useCallback(
    () =>
      router.push({
        pathname: "/basket",
      }),
    []
  );

  const knowMore = useCallback(
    id =>
      router.push(
        {
          pathname: "/products/[product]",
        },
        "/products/" + id
      ),
    []
  );

  return (
    <Container variant={variant}>
      <div className="background">
        <Circle data-circle1 />
        <Group1 data-group1 fill="white" fillOpacity={0.15} />
        <Group2 data-group2 fill="white" fillOpacity={0.15} />
        <Circle data-circle2 />
        <Group3 data-group3 fill="white" fillOpacity={0.15} />
        <Group4 data-group4 fill="white" fillOpacity={0.15} />
        <Circle data-circle3 />
      </div>
      {(() => {
        switch (router.pathname) {
          case "/service-center":
          case "/gallery":
          case "/delivery":
            return (
              <Section className="team-section">
                <Slider {...defaultSettings}>
                  {[{ img: "team.jpg" }].map(({ img }) => (
                    <img
                      key={img}
                      className="team"
                      src={`/images/banner/team/${img}`}
                    />
                  ))}
                </Slider>
              </Section>
            );
          default:
            return (
              <Section>
                <Slider {...defaultSettings}>
                  {photos.map(({ id, price, name, img }) => (
                    <div key={id} className="wrapper">
                      <div className="info">
                        <div className="texts">
                          {[
                            { title: "доставка по всей россии", sz: "normal" },
                            { title: name, sz: "larger" },
                            { title: "Лучшая цена на рынке", sz: "normal" },
                            { title: price + " ₽", sz: "larger" },
                            {
                              title:
                                "Антибактериальный фильтр <strong>в подарок<strong>",
                              sz: "normal",
                            },
                          ].map(({ title, sz }, idx) => (
                            <Text sz={sz} clr="white" key={idx}>
                              {title}
                            </Text>
                          ))}
                        </div>
                        <div className="buttons">
                          <Button
                            title="Узнать больше"
                            variant="secondary"
                            onClick={() => knowMore(id)}
                          />
                          <ButtonAddToBasket
                            variant="primary"
                            title="Сделать заказ"
                            product={{ id, price }}
                            callBack={addBasketCallBack}
                          />
                        </div>
                      </div>
                      <div className="image">
                        <img src={img} />
                      </div>
                    </div>
                  ))}
                </Slider>
              </Section>
            );
          case "/certificates":
            return (
              <Section className="team-section">
                <Slider
                  {...defaultSettings}
                  slidesToShow={3}
                  responsive={[
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 2,
                      },
                    },
                    {
                      breakpoint: 450,
                      settings: {
                        slidesToShow: 1,
                      },
                    },
                  ]}
                >
                  {[
                    { img: "1.jpg" },
                    { img: "2.jpg" },
                    { img: "3.jpg" },
                    { img: "4.jpg" },
                    { img: "5.jpg" },
                  ].map(({ img }) => (
                    <img
                      key={img}
                      className="team"
                      src={`/images/banner/certificate/${img}`}
                    />
                  ))}
                </Slider>
              </Section>
            );
        }
      })()}
    </Container>
  );
};

Banner.propTypes = {
  variant: PropTypes.oneOf(variants),
};

export default Banner;
