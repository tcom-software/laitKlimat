import get from "lodash/get";
import { AppState } from "@redux/types";
import { createSelector } from "reselect";
import { serialezeKey } from "@redux/reducers/filters";

export const getFilters = (state: AppState) =>
  get(state, ["filters", "filters"]);

export const getCurrentCategoryId = (state: AppState) =>
  get(state, ["filters", "filters", "c"]);

export const getFiltersCache = (state: AppState) =>
  get(state, ["filters", "cache"]);

// example` useSelector(getFiltersCacheByKey(someKey))
export const getFiltersCacheByKey = (key: any) =>
  createSelector(
    getFiltersCache,
    (cache: any) => cache._cache[serialezeKey(key)]
  );
