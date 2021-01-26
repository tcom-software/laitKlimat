import { GetServerSidePropsContext } from "next";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForceUpdate } from "hooks/useForceUpdate";
import cn from "classnames";

//atoms
import Icon from "@atoms/Icon";
import Text from "@atoms/Text";
import Button from "@atoms/Button";

//molecules
import Hgroup from "@molecules/Hgroup";

//organisms
import ChosenFilters from "@organisms/ChosenFilters";
import Pagination from "@organisms/Pagination";
import PreviousViews from "@organisms/PreviousViews";
import Product from "@organisms/Product";
import Filter from "@organisms/Filter";

import { Container } from "@styles/pages/product";

import {
  initializeFilters,
  initializeCategories,
  InitialReduxStateProps,
} from "helper/initialReduxState";
import { addFilters, addFiltersCache } from "@redux/actions/filters";
import { getCurrentCategoryTitle } from "@redux/selectors/site";
import { getFiltersCacheByKey } from "@redux/selectors/filters";
import { useDispatch, useSelector } from "react-redux";
import { initializeStore } from "@redux";

import { serialezeKey } from "@redux/reducers/filters";
import { toggleCategoryLoader } from "@redux/actions/loader";
import { getCategoryLoader } from "@redux/selectors/loader";

import { compose } from "utils/compose";
import isEmpty from "lodash/isEmpty";

const Category = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const forceUpdate = useForceUpdate();
  const loading = useSelector(getCategoryLoader);
  const titles = useSelector(getCurrentCategoryTitle);
  const cachedProducts = useSelector(
    getFiltersCacheByKey(serialezeKey(router.query) || "")
  );

  const [viewState, setViewState] = useState("box");
  const [products, setProducts] = useState<any[]>();
  const [totalPage, setTotalPages] = useState<number>(0);

  const hideLoader = useCallback(
    () => setTimeout(() => dispatch(toggleCategoryLoader(false)), 100),
    []
  );

  const onPageChange = useCallback(
    ({ selected }: any) => {
      router.push({
        pathname: router.pathname,
        query: { ...router.query, page: selected + 1 },
      });
    },
    [router.query]
  );

  useEffect(() => {
    if (!cachedProducts) {
      fetchCategoryProducts().then(products => {
        const cachedKey = serialezeKey(router.query);
        dispatch(addFiltersCache(cachedKey, products));
        setProducts(products.products);
        setTotalPages(products.products_info.total);
        hideLoader();
      });
    } else {
      setProducts(cachedProducts.products);
      setTotalPages(cachedProducts.products_info.total);
      hideLoader();
    }
    dispatch(addFilters(router.query));
  }, [router.query]);

  useEffect(() => {
    router.events.on("routeChangeStart", () =>
      dispatch(toggleCategoryLoader(true))
    );

    const isBoxView = viewState === "box" || globalThis.innerWidth <= 1024;
    const resize = () => {
      if (isBoxView) setViewState("box");
      forceUpdate();
    };
    globalThis.addEventListener("resize", resize);
    return () => globalThis.removeEventListener("resize", resize);
  }, []);

  const fetchCategoryProducts = async () => {
    const {
      utm_campaign,
      utm_source,
      utm_medium,
      utm_content,
      utm_term,

      page,
      c: category,
      manufacturerCountries,
      price,
      // ranges "from to"
      range1,
      range2,
      range4,
      range5,
      ...checkboxes
    } = router.query as any;
    const otherRanges: any = {
      range2,
      range1,
      range4,
      range5,
    };
    const serialezedOtherRanges: any = {};

    for (let key in otherRanges) {
      if (otherRanges[key]) {
        serialezedOtherRanges[key.slice(-1)] = otherRanges[key]
          .split(" ")
          .map((val: string) => (isNaN(+val) ? null : Number(val)));
      }
    }

    for (let key in checkboxes) {
      checkboxes[key] = checkboxes[key]
        .split(" ")
        .map((val: string) => Number(val));
    }

    const body: any = {};

    if (price) {
      body.fromTo = body.fromTo || {};
      body.fromTo.price = price
        .split(" ")
        .map((val: string) => (isNaN(+val) ? null : Number(val)));
    }

    if (!isEmpty(serialezedOtherRanges)) {
      body.fromTo = body.fromTo || {};
      body.fromTo = {
        ...body.fromTo,
        ...serialezedOtherRanges,
      };
    }

    if (manufacturerCountries) {
      body.manufacturerCountries = manufacturerCountries.split(" ");
    }

    if (!isEmpty(checkboxes)) {
      body.checkboxes = checkboxes;
    }

    // fetch products from api
    const response = await fetch("/api/getCategoryProducts", {
      method: "POST",
      body: JSON.stringify({ category, page: page || 1, body }),
    });
    const products = await response.json();

    return products;
  };

  const resetFilters = () => {
    router.replace({
      pathname: router.pathname,
      query: { c: router.query.c, page: 1 },
    });
  };

  return (
    <Container>
      {/* ******************* Title ********************** */}
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
        <Hgroup h1={titles?.category || ""} h2={titles?.subSubCategory || ""} />
      </section>
      {/* ******************* Chosen Filters ********************** */}
      <ChosenFilters />
      <section className="container main-content">
        {/* ******************* Filter ********************** */}
        <form className="filters">
          <Filter />
          <Button
            title="сброс"
            type="button"
            variant="secondary"
            onClick={resetFilters}
          />
        </form>
        {/* ******************* Products ********************** */}
        {products ? (
          <div className={cn("products", `${viewState}-view`)}>
            {products.map((product: any, i: number) => (
              <Product key={i} view={viewState} data={product} />
            ))}
          </div>
        ) : null}
        {/* ******************* Pagination ********************** */}
        {totalPage === 0 && products && !loading && (
          <Text tag="p" sz="normal" clr="tercary" className="no-products">
            Нет результатов
          </Text>
        )}
        <Pagination
          pages={totalPage}
          onPageChange={onPageChange}
          forcePage={Number(router.query.page) - 1}
          initialPage={Number(router.query.page) - 1}
          className={totalPage === 0 && products && !loading ? "hide" : ""}
        />
        <PreviousViews />
      </section>
    </Container>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const store = initializeStore();

  const { initialStore } = await compose(
    initializeCategories,
    initializeFilters
  )({ store, ctx, initialStore: {} } as InitialReduxStateProps);

  return {
    props: {
      initialStore,
      bannerVariant: "secondary",
    },
  };
};

export default Category;
