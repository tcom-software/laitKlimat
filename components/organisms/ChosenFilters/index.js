import { getFiltersDataCacheByKey } from "@redux/selectors/filtersData";
import { serialezeFiltersDataKey } from "@redux/reducers/filtersData";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Container } from "./styles";

const ChosenFilters = () => {
  const router = useRouter();
  const [mc, setMC] = useState(null);
  const [priceRange, setPriceRange] = useState(null);
  const [otherRanges, setOtherRanges] = useState(null);
  const [otherFilters, setOtherFilters] = useState(null);
  const serializedKey = serialezeFiltersDataKey(router.query.c);
  const filtersData = useSelector(getFiltersDataCacheByKey(serializedKey));

  useEffect(() => {
    /**
     * checked values from url search params
     * @example
     * in url => ?3=1+45+12+7
     * 3 => checkboxes group name(inputName)
     * 1+45+12+7 => checked inputs values
     *
     * in router.query[inputName] => "1 45 12 7"
     */
    const {
      manufacturerCountries,
      c,
      page,
      price,
      // from to inputs
      range1,
      range2,
      range4,
      range5,
      ...other
    } = router.query;

    // --- manufacturerCountries
    setMC(manufacturerCountries?.split(" "));

    // --- price range
    setPriceRange(price?.split(" "));

    // --- other ranges
    const otherRanges = Object.entries({
      range2,
      range1,
      range4,
      range5,
    })
      // filter only none empty values
      .filter(([_, value]) => value)
      // transform values to array splitting by one space
      .map(([key, value]) => [key, value.split(" ")]);

    setOtherRanges(otherRanges);

    // --- other filters
    const otherFilters = Object.entries(other)
      // filter only number keys that in range [0, 100]
      ?.filter(([key, _]) => !isNaN(key) && key !== "" && Number(key) < 100)
      // transform values to array splitting by one space
      .map(([key, value]) => [key, value?.split(" ")]);
    setOtherFilters(otherFilters);
  }, [router.query]);

  /**
   *
   */
  const handleDeleteFilterElement = (filters, filterId, filterElementId) => {
    const query = { ...router.query, page: 1 };
    const newSearchParams = filters
      .filter(val => val !== filterElementId)
      .join(" ");

    if (!newSearchParams) {
      delete query[filterId];
    } else {
      query[filterId] = newSearchParams;
    }

    router.push({
      pathname: router.pathname,
      query,
    });
  };

  /**
   *
   */
  const handleDeleteFilter = filterId => {
    const query = { ...router.query, page: 1 };
    delete query[filterId];

    router.push({
      pathname: router.pathname,
      query,
    });
  };

  const { data, manufacturerCountries = [], textFilters = [] } =
    filtersData || {};

  if (!mc && !otherFilters && !priceRange) {
    return null;
  }

  return (
    <Container className="chosen-filters container">
      <div className="inner">
        {/* manufacturerCountries */}
        {mc && (
          <div className="filter-button">
            <span
              className="filter-title"
              onClick={() => handleDeleteFilter("manufacturerCountries")}
            >
              <span>ПРОИЗВОДИТЕЛЬ</span>
            </span>
            <span className="filter-values">
              {mc?.map(id => (
                <span
                  key={id}
                  onClick={() =>
                    handleDeleteFilterElement(mc, "manufacturerCountries", id)
                  }
                >
                  <span>
                    {
                      manufacturerCountries.find(({ value }) => value == id)
                        ?.label
                    }
                  </span>
                </span>
              ))}
            </span>
          </div>
        )}
        {/* price */}
        {priceRange && (
          <div className="filter-button">
            <span
              className="filter-title"
              onClick={() => handleDeleteFilter("price")}
            >
              <span>ЦЕНА</span>
            </span>
            <span className="filter-values">
              {priceRange[0] !== "null" && (
                <span onClick={() => handleDeleteFilter("price")}>
                  <span>От - {priceRange[0]}</span>
                </span>
              )}
              {priceRange[1] !== "null" && (
                <span onClick={() => handleDeleteFilter("price")}>
                  <span>До - {priceRange[1]}</span>
                </span>
              )}
            </span>
          </div>
        )}
        {/* other ranges */}
        {textFilters &&
          otherRanges?.map(([key, value], idx) => (
            <div className="filter-button" key={key}>
              <span
                className="filter-title"
                onClick={() => handleDeleteFilter(key)}
              >
                <span>
                  {textFilters.find(({ id }) => id == key.slice(-1))?.title}
                </span>
              </span>
              <span className="filter-values">
                {otherRanges[idx][1][0] !== "null" && (
                  <span onClick={() => handleDeleteFilter(key)}>
                    <span>От - {otherRanges[idx][1][0]}</span>
                  </span>
                )}
                {otherRanges[idx][1][1] !== "null" && (
                  <span onClick={() => handleDeleteFilter(key)}>
                    <span>До - {otherRanges[idx][1][1]}</span>
                  </span>
                )}
              </span>
            </div>
          ))}
        {/* other filters */}
        {data &&
          otherFilters?.map(([key, value], idx) => (
            <div className="filter-button" key={key}>
              <span
                className="filter-title"
                onClick={() => handleDeleteFilter(key)}
              >
                <span>{data[key].title}</span>
              </span>
              <span className="filter-values">
                {value?.map(id => (
                  <span
                    onClick={() =>
                      handleDeleteFilterElement(otherFilters[idx][1], key, id)
                    }
                  >
                    <span>
                      {data[key].values.find(({ value }) => value == id)?.label}
                    </span>
                  </span>
                ))}
              </span>
            </div>
          ))}
      </div>
    </Container>
  );
};

export default ChosenFilters;
