import { FC, useEffect, useMemo, useRef, useState, Ref, memo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import cn from "classnames";

import { Icon, Loading, Text } from "@atoms";
import { useOutsideClickClose } from "@hooks";
import { SearchData } from "helper/serializeSearchResult";
import { StyledSearch } from "./styles";
import { ProductService } from "api/ProductService";
import { getCategories } from "@redux/selectors/site";
import { useSelector } from "react-redux";

let timeId: number;

interface SearchProps {
  className?: string;
  withCategorySwitcher?: boolean;
  inputRef?: Ref<HTMLInputElement>;
  getSearchValue?: (value: string) => void;
  getSelectedCategory?: (value: any) => void;
  handleOnProductClick?: (productId: any) => void;
  [x: string]: any;
}

const Search: FC<SearchProps> = ({
  inputRef,
  className,
  getSearchValue,
  handleOnProductClick,
  withCategorySwitcher,
  getSelectedCategory: parentGetSelectedCategory,
}) => {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const [searchState, setSearchState] = useState<any>({ categoryId: [] });
  const [loading, setLoading] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(true);
  const [searchResults, setSearchResults] = useState<SearchData[] | null>(null);

  useOutsideClickClose([scrollRef, containerRef], setShowResults);

  const hasNextPage = useMemo(() => total / (page * 15) > 1, [total, page]);

  useEffect(() => {
    getSearchValue?.(search);

    clearTimeout(timeId);
    setSearchResults(null);
    timeId = setTimeout(async () => {
      setPage(1);
      setLoading(true);
      setShowResults(true);
      scrollRef.current && (scrollRef.current.scrollTop = 0);

      const { total, products } = await ProductService.searchProducts({
        body: {
          search,
          ...(searchState?.categoryId?.length
            ? { catalogId: searchState?.categoryId }
            : {}),
        },
        page,
      });

      setTotal(total);
      setLoading(false);
      setSearchResults(products);
    }, 400);
  }, [search]);

  useEffect(() => {
    if (hasNextPage && !loading) {
      setLoading(true);

      (async () => {
        const { products } = await ProductService.searchProducts({
          body: {
            search,
            ...(searchState?.categoryId?.length
              ? { catalogId: searchState?.categoryId }
              : {}),
          },
          page,
        });
        setLoading(false);
        if (!products || products.length === 0) return;
        setSearchResults(prevSearch => [
          ...(prevSearch || ([] as SearchData[])),
          ...products,
        ]);
      })();
    }
  }, [page]);

  const handleOnScroll = (e: any) => {
    const {
      scrollTop,
      scrollHeight,
      offsetHeight,
    } = e.target as HTMLDivElement;

    if (hasNextPage && !loading) {
      if (scrollTop + offsetHeight >= scrollHeight - 5) {
        setPage(page => page + 1);
      }
    }
  };

  return (
    <StyledSearch ref={containerRef} className={cn("search-bar", className)}>
      <form>
        {withCategorySwitcher && (
          <CategorySwitcher
            getSelected={value => {
              setSearchState(value);
              parentGetSelectedCategory?.(value);
            }}
          />
        )}
        <label>
          <span className="srOnly">поиск продуктов</span>
          <input
            type="text"
            name="search"
            ref={inputRef}
            autoComplete="off"
            placeholder="Написать для поиска"
            onChange={e => setSearch(e.target.value)}
            onFocus={() => setShowResults(true)}
          />
          {showResults && searchResults && (
            <div
              ref={scrollRef}
              className="search-result"
              onScroll={handleOnScroll}
            >
              <p>
                по вашему запросу найдено <strong>{total}</strong> продуктов
              </p>
              <ul>
                {searchResults.map(({ name, price, image, id }) => (
                  <li
                    key={id}
                    onClick={() => {
                      handleOnProductClick && handleOnProductClick(id);
                      setShowResults(false);
                    }}
                  >
                    {handleOnProductClick ? (
                      <a>
                        <img src={image} alt="product" />
                        <span>{name}</span>
                        <span>{price}</span>
                      </a>
                    ) : (
                      <Link href={`/products/[product]`} as={`/products/${id}`}>
                        <a>
                          <img src={image} alt="product" />
                          <span>{name}</span>
                          <span>{price}</span>
                        </a>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <button type="button">
                {loading ? (
                  <Loading mode="dark" />
                ) : (
                  !hasNextPage && "нет результата"
                )}
              </button>
            </div>
          )}
        </label>
        <button
          type="button"
          aria-label="поиск кнопка"
          onClick={() => {
            search &&
              router.push({
                pathname: "/search",
                query: {
                  search,
                  page: 1,
                  c: searchState?.categoryId.join(" "),
                },
              });
          }}
        >
          <Text clr="white" sz="normal" tag="span">
            Поиск
          </Text>
          <Icon name="search" width={24} />
        </button>
      </form>
    </StyledSearch>
  );
};

export default memo(Search);

interface CategorySwitcherProps {
  getSelected?: (value: any) => void;
}

const CategorySwitcher: FC<CategorySwitcherProps> = ({
  getSelected: parentGetSelected,
}) => {
  const ref = useRef(null);
  const categories = useSelector(getCategories);

  const [isOpen, setOpen] = useState(false);
  const [selectedCategory, updateCategory] = useState<any>(null);
  useOutsideClickClose(ref, () => setOpen(false));

  const serializedCategories = useMemo(
    () =>
      ((categories as unknown) as any[])?.reduce(
        (acc, sub) => [
          ...acc,
          ...sub.subCategories.map(({ name, id, subCategories }: any) => ({
            id,
            name,
            categoryId: subCategories.map(({ id }: any) => id),
          })),
        ],
        []
      ),
    [categories]
  );

  return (
    <div className={cn({ "category-switcher": true, open: isOpen })} ref={ref}>
      {/*<div
        title={selectedCategory?.name}
        onClick={() => setOpen(s => !s)}
        className="category-switcher__button"
      >
        <span>{selectedCategory?.name ?? "Везде"}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="16">
          <path
            fill="#222"
            fill-rule="evenodd"
            d="M3.636 0l3.637 6.4H0L3.636 0zm0 16L0 9.6h7.273L3.636 16z"
          />
        </svg>
      </div>*/}
      <div className="category-switcher__popup">
        <ul className="category-list">
          {serializedCategories?.map((category: any) => (
            <li
              key={category.id}
              onClick={() => {
                setOpen(false);
                updateCategory(category);
                parentGetSelected?.(category);
              }}
              className={cn("category-item", {
                selected: category.id === selectedCategory?.id,
              })}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
