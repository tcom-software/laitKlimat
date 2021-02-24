import { FC, useEffect, useMemo, useRef, useState, Ref, memo } from "react";
import Link from "next/link";
import cn from "classnames";

import { Icon, Loading, Text } from "@atoms";
import { useOutsideClickClose } from "@hooks";
import {
  SearchData,
  serializeSearchResult,
} from "helper/serializeSearchResult";
import { StyledSearch } from "./styles";
import { ProductService } from "api/ProductService";

let timeId: number;

interface SearchProps {
  handleOnProductClick?: (productId: any) => void;
  className?: string;
  inputRef?: Ref<HTMLInputElement>;
  [x: string]: any;
}

const Search: FC<SearchProps> = ({
  inputRef,
  className,
  handleOnProductClick,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(true);
  const [searchResults, setSearchResults] = useState<SearchData[] | null>(null);
  useOutsideClickClose([scrollRef, containerRef], setShowResults);

  const hasNextPage = useMemo(() => total / (page * 15) > 1, [total, page]);

  useEffect(() => {
    clearTimeout(timeId);
    setSearchResults(null);
    timeId = setTimeout(async () => {
      setPage(1);
      setLoading(true);
      setShowResults(true);
      scrollRef.current && (scrollRef.current.scrollTop = 0);

      const { total, products } = await ProductService.searchProducts(
        search,
        page
      );

      setTotal(total);
      setLoading(false);
      setSearchResults(products);
    }, 400);
  }, [search]);

  useEffect(() => {
    if (hasNextPage && !loading) {
      setLoading(true);

      (async () => {
        const { products } = await ProductService.searchProducts(search, page);
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
        <label>
          <span className="srOnly">поиск продуктов</span>
          <input
            ref={inputRef}
            type="text"
            name="search"
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
        <button type="button" aria-label="поиск кнопка">
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
