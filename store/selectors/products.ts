import get from "lodash/get";
import { AppState } from "@redux/types";
import { createSelector } from "reselect";

export const getProductsCache = (state: AppState) =>
  get(state, ["products", "cache"]);

export const getCachedProducts = () =>
  createSelector(getProductsCache, (cache: any) => cache._cache);

export const getCachedProductsIds = () =>
  createSelector(getProductsCache, (cache: any) => cache._cacheOrdering);

// example` useSelector(getProductsCacheByKey(someKey))
export const getProductsCacheByKey = (key: any) =>
  createSelector(getProductsCache, (cache: any) => cache._cache[String(key)]);
