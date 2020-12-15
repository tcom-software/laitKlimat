import { Icon, Loading, Text } from "@atoms";
import { useOutsideClickClose } from "@hooks";
import {
  serializeSearchResult,
  SearchData,
} from "helper/serializeSearchResult";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

let timeId: number;

const Search = () => {
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

      const {
        payload: { total, searchResponse },
      } = await fetchSearchData();
      const result = searchResponse && serializeSearchResult(searchResponse);

      setLoading(false);
      setTotal(total);
      setSearchResults(result);
    }, 400);
  }, [search]);

  useEffect(() => {
    if (hasNextPage && !loading) {
      setLoading(true);

      (async () => {
        const {
          payload: { searchResponse },
        } = await fetchSearchData();
        const result = searchResponse && serializeSearchResult(searchResponse);

        setLoading(false);
        if (!result || result.length === 0) return;
        setSearchResults(prevSearch => [
          ...(prevSearch || ([] as SearchData[])),
          ...result,
        ]);
      })();
    }
  }, [page]);

  const fetchSearchData = async () => {
    const response = await fetch("/api/searchProduct", {
      method: "POST",
      body: JSON.stringify({ search, page }),
    });
    return await response.json();
  };

  return (
    <div ref={containerRef} className="search-bar">
      <form>
        <label>
          <span className="srOnly">поиск продуктов</span>
          <input
            type="text"
            name="search"
            autoComplete="off"
            placeholder="написать для поиска"
            onChange={e => setSearch(e.target.value)}
            onFocus={() => setShowResults(true)}
          />
          {showResults && searchResults && (
            <div
              ref={scrollRef}
              className="search-result"
              onScroll={e => {
                const {
                  scrollHeight,
                  scrollTop,
                  offsetHeight,
                } = e.target as HTMLDivElement;

                if (hasNextPage && !loading) {
                  if (scrollTop + offsetHeight >= scrollHeight - 5) {
                    setPage(page => page + 1);
                  }
                }
              }}
            >
              <p>
                по вашему запросу найдено <strong>{total}</strong> продуктов
              </p>
              <ul>
                {searchResults.map(({ name, price, image, id }) => (
                  <Link
                    href={`/products/[product]`}
                    as={`/products/${id}`}
                    key={id}
                  >
                    <li key={id} onClick={() => setShowResults(false)}>
                      <img src={image} alt="product" />
                      <span>{name}</span>
                      <span>{price}</span>
                    </li>
                  </Link>
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
        <button type="button">
          <Text clr="white" sz="normal" tag="span">
            поиск
          </Text>
          <Icon name="search" width={24} />
        </button>
      </form>
    </div>
  );
};

export default Search;
