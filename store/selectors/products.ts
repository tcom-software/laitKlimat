import get from "lodash/get";
import { AppState } from "@redux/types";
import { createSelector } from "reselect";

export const getProductsCache = (state: AppState) =>
  get(state, ["products", "cache"]);

// example` useSelector(getProductsCacheByKey(someKey))
export const getProductsCacheByKey = (key: any) =>
  createSelector(getProductsCache, (cache: any) => cache._cache[String(key)]);
