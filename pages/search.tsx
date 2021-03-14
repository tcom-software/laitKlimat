import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForceUpdate } from "hooks/useForceUpdate";
import { useRouter } from "next/router";
import cn from "classnames";

// atoms
import Icon from "@atoms/Icon";
import Text from "@atoms/Text";
import Button from "@atoms/Button";

// molecules
import Hgroup from "@molecules/Hgroup";

// organisms
import { FilterForSearch } from "@organisms/Filter";
import Product from "@organisms/Product";
import Pagination from "@organisms/Pagination";

import { Container } from "@styles/pages/product";

import { ProductService } from "api/ProductService";
import { getCategoryLoader } from "@redux/selectors/loader";
import { toggleCategoryLoader } from "@redux/actions/loader";

const SearchPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const forceUpdate = useForceUpdate();
  const loading = useSelector(getCategoryLoader);

  const [viewState, setViewState] = useState("box");
  const [products, setProducts] = useState<any[]>();
  const [totalPages, setTotalPages] = useState<number>(0);

  const hideLoader = useCallback(
    () => setTimeout(() => dispatch(toggleCategoryLoader(false)), 100),
    []
  );

  const handlePageChange = useCallback(
    ({ selected }: any) => {
      router.push({
        pathname: router.pathname,
        query: { ...router.query, page: selected + 1 },
      });
    },
    [router.query]
  );

  useEffect(() => {
    const { page = 1, search, c, manufacturerCountries } = router.query as {
      [x: string]: string | undefined;
    };

    search &&
      ProductService.searchProducts({
        body: {
          search,
          ...(c ? { categoryId: c.split(" ").map(n => Number(n)) } : {}),
          ...(manufacturerCountries
            ? {
                manufacturerCountries: manufacturerCountries
                  .split(" ")
                  .map(n => Number(n)),
              }
            : {}),
          page,
        },
        page,
        noSerialize: true,
      }).then(data => {
        setTotalPages(data.total);
        setProducts(data.products);
        hideLoader();
      });
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
        <Hgroup h1={`Поиск продуктов по слову \`${router.query.search}\``} />
      </section>
      <section className="container main-content">
        {/* ******************* Filter ********************** */}
        <form className="filters">
          {/* <Filter /> */}
          <FilterForSearch />
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
            {products.map((product: any) => (
              <Product
                key={product.id}
                view={viewState}
                data={{ ...product, type: "search" }}
              />
            ))}
          </div>
        ) : null}
        {totalPages === 0 && products && !loading && (
          <Text tag="p" sz="normal" clr="tercary" className="no-products">
            Нет результатов
          </Text>
        )}
        {/* ******************* Pagination ********************** */}
        <Pagination
          pages={totalPages}
          onPageChange={handlePageChange}
          forcePage={Number(router.query.page) - 1}
          initialPage={Number(router.query.page) - 1}
          className={totalPages === 0 && products && !loading ? "hide" : ""}
        />
        <div style={{ display: "flex", width: "100%" }} />
      </section>
    </Container>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {
      bannerVariant: "secondary",
    },
  };
};

export default SearchPage;
