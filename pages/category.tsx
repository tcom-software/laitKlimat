import { GetServerSidePropsContext } from "next";
import { FC, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import { useForceUpdate } from "hooks";
import cn from "classnames";

import { PreviousViews, Product, Filter, ChosenFilters } from "@organisms";
import { Container } from "@styles/pages/product";
import { Button, Text, Icon } from "@atoms";

import {
  initializeCategories,
  initializeFilters,
  initializeProducts,
  InitialReduxStateProps,
} from "helper/initialReduxState";
import { addFilters, addFiltersCache } from "@redux/actions/filters";
import { getCurrentCategoryTitle } from "@redux/selectors/site";
import { getFiltersCacheByKey } from "@redux/selectors/filters";
import { useDispatch, useSelector } from "react-redux";
import smoothScroll from "utils/smoothScroll";
import { initializeStore } from "@redux";
import { compose } from "utils/compose";

interface Props {
  initialStore: {
    products: {
      hasCache: boolean;
      cachedKey?: string;
      payload?: any;
    };
    filtersData: {
      hasCache: boolean;
      categoryId: string;
      payload?: any;
    };
  };
}

const Category: FC<Props> = ({ initialStore }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const forceUpdate = useForceUpdate();
  const [viewState, setViewState] = useState("box");
  const titles = useSelector(getCurrentCategoryTitle);
  const { products = [], products_info } =
    useSelector(getFiltersCacheByKey(initialStore.products.cachedKey || "")) ||
    {};

  useEffect(() => {
    const { products } = initialStore;
    if (!products.hasCache) {
      dispatch(addFiltersCache(products.cachedKey, products.payload));
    }
    dispatch(addFilters(router.query));
  }, [router.query]);

  // every "page change" and "category change" scrollTo category title
  useEffect(() => {
    smoothScroll("category-title");
  }, [router.query]);

  useEffect(() => {
    const isBoxView = viewState === "box" || globalThis.innerWidth <= 1024;
    const resize = () => {
      if (isBoxView) setViewState("box");
      forceUpdate();
    };
    globalThis.addEventListener("resize", resize);
    return () => globalThis.removeEventListener("resize", resize);
  }, []);

  const onPageChange = ({ selected }: any) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page: selected + 1 },
    });
  };

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
        <hgroup id="category-title">
          <Text tag="h1" sz="larg" clr="primary">
            {titles?.category || ""}
          </Text>
          <Text tag="h2" sz="larg" clr="primary">
            {titles?.subSubCategory || ""}
          </Text>
        </hgroup>
      </section>
      <ChosenFilters />
      <section className="container main-content">
        <form className="filters">
          <Filter />
          <Button variant="secondary" title="сброс" type="reset" />
        </form>
        <div className={cn("products", `${viewState}-view`)}>
          {products.map((product: any, i: number) => (
            <Product key={i} view={viewState} data={product} />
          ))}
        </div>
        <div className="pagination--wrapper">
          <ReactPaginate
            containerClassName="pagination"
            pageCount={Math.ceil(products_info?.total / 10) || 1}
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
            forcePage={Number(router.query.page) - 1}
            initialPage={Number(router.query.page) - 1}
            onPageChange={onPageChange}
            disableInitialCallback={false}
          />
        </div>
        <PreviousViews />
      </section>
    </Container>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const store = initializeStore();

  const { initialStore } = await compose(
    initializeCategories,
    initializeFilters,
    initializeProducts
  )({ store, ctx, initialStore: {} } as InitialReduxStateProps);

  return {
    props: {
      initialStore,
      bannerVariant: "secondary",
    },
  };
};

export default Category;
