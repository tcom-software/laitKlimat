import { useEffect, useState, useRef, useMemo } from "react";
import ReactPaginate from "react-paginate";
import Head from "next/head";
import cn from "classnames";

import { initializeStore } from "@redux/index";
import { useForceUpdate } from "hooks";

import { Button, Text, Icon } from "@atoms";
import { PreviousViews, Product, Filter } from "@organisms";

import { Container } from "@styles/pages/product";

const PlacingAndMontage = () => {
  const [viewState, setViewState] = useState("box");
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    const resize = () => {
      if (viewState === "box" || globalThis.innerWidth <= 1024) {
        setViewState("box");
      }
      forceUpdate();
    };
    globalThis.addEventListener("resize", resize);
    return () => globalThis.removeEventListener("resize", resize);
  }, []);

  return (
    <Container>
      <section className="title container">
        {globalThis.innerWidth >= 1024 && (
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
        )}
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
        <form className="filters">
          <Filter />
          <Button variant="secondary" title="сброс" type="reset" />
        </form>

        <div className={cn("products", `${viewState}-view`)}>
          {[...Array(10)].map((_, i) => (
            <Product key={i} view={viewState} />
          ))}
        </div>

        <section className="pagination--wrapper">
          <ReactPaginate
            containerClassName="pagination"
            pageCount={10}
            pageRangeDisplayed={3}
            marginPagesDisplayed={3}
            previousLabel={
              <span className="arrow-icons" data-direction="left">
                &#x3c;
              </span>
            }
            nextLabel={
              <span className="arrow-icons" data-direction="right">
                &#x3e;
              </span>
            }
            initialPage={1}
            disableInitialCallback={true}
          />
        </section>

        <PreviousViews />
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
