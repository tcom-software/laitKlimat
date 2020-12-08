import get from "lodash/get";
import { AppState } from "@redux/types";
// import { createSelector } from "reselect";

export const getBasket = (state: AppState) => get(state, ["basket"]);
export const getBasketCount = (state: AppState) =>
  get(state, ["basket", "count"]);

// export const getCurrentCategoryId = (state: AppState) =>
//   get(state, ["filters", "filters", "c"]);

// export const getFiltersCache = (state: AppState) =>
//   get(state, ["filters", "cache"]);

// example` useSelector(getFiltersCacheByKey(someKey))
// export const getFiltersCacheByKey = (key: any) =>
//   createSelector(
//     getFiltersCache,
//     (cache: any) => cache._cache[serialezeKey(key)]
//   );
