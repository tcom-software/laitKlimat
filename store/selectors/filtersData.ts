import get from "lodash/get";
import { AppState } from "@redux/types";
import { createSelector } from "reselect";
import { serialezeFiltersDataKey } from "@redux/reducers/filtersData";

export const getFiltersDataCache = (state: AppState) =>
  get(state, ["filtersData", "cache"]);

// example` useSelector(getFiltersDataCacheByKey(someKey))
export const getFiltersDataCacheByKey = (key: any) =>
  createSelector(
    getFiltersDataCache,
    (cache: any) => cache._cache[serialezeFiltersDataKey(key)]
  );
