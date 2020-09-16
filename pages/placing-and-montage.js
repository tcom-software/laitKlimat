import { useEffect, useState, useRef, useMemo } from "react";
import cn from "classnames";

import Head from "next/head";
import { Button, Image, Text, Icon } from "@atoms";
import { Product } from "@organisms";
import { initializeStore } from "@redux/index";

import { Container } from "@styles/pages/product";

const PlacingAndMontage = () => {
  const [viewState, setViewState] = useState("box");

  return (
    <Container>
      <section className="title container">
        <div className="viewVariants">
          <Text tag="span" sz="normal" clr="primary">
            Вид
          </Text>
          <button onClick={() => setViewState("line")}>
            <Icon name="listView" className={viewState} />
          </button>
          <button onClick={() => setViewState("box")}>
            <Icon name="boxView" className={viewState} />
          </button>
        </div>
        <hgroup>
          <Text tag="h1" sz="larg" clr="primary">
            Кондиционеры и увлажнители
          </Text>
          <Text tag="h2" sz="larg" clr="primary">
            Настенные кондиционеры (сплит-системы)
          </Text>
        </hgroup>
      </section>

      <section className="container main-content">
        <div className="filters">filtersfiltersfilters</div>
        {viewState === "box" ? (
          <div className="products box-view">
            {[...Array(10)].map((_, i) => (
              <Product key={i} view={viewState} />
            ))}
          </div>
        ) : (
          <div className="products line-view">
            {[...Array(10)].map((_, i) => (
              <Product key={i} view={viewState} />
            ))}
          </div>
        )}
      </section>
    </Container>
  );
};

export const getServerSideProps = () => {
  const reduxStore = initializeStore();

  return {
    props: {
      bannerVariant: "secondary",
    },
  };
};

export default PlacingAndMontage;
