import { storage } from "constants/storageKeys";
import { setCookie } from "utils/cookies";
import { types } from "../actions/filtersData";
import { ActionCreatorType } from "../types";

export const serialezeFiltersDataKey = (key: any) => {
  return String(key);
};

const addToCashe = (cache: any, payload: any) => {
  const serialezedKey = serialezeFiltersDataKey(payload.key);
  cache._cache[serialezedKey] = payload.value;
  cache._cacheOrdering.push(serialezedKey);
  setCookie(storage.FILTERS_DATA, JSON.stringify(cache._cacheOrdering), 1);
  if (cache._cacheOrdering.length > cache._cacheSize) {
    const earliest = cache._cacheOrdering[0];
    removeCacheByKey(cache, earliest);
  }
  return cache;
};

const removeCacheByKey = (cache: any, key: any) => {
  const serialezedKey = serialezeFiltersDataKey(key);
  const index = cache._cacheOrdering.indexOf(serialezedKey);
  if (index > -1) {
    cache._cacheOrdering.splice(index, 1);
    setCookie(storage.FILTERS_DATA, JSON.stringify(cache._cacheOrdering), 1);
  }
  delete cache._cache[serialezedKey];
  return cache;
};

const initialState = {
  cache: {
    _cache: {},
    _cacheSize: 3,
    _cacheOrdering: [],
  },
};

const filtersDataReducer = (
  state = initialState,
  action: ActionCreatorType
): FiltersDataState => {
  switch (action.type) {
    // cache filters data by categories
    case types.ADD_NEW_CACHE:
      return {
        ...state,
        cache: { ...addToCashe(state.cache, action.payload) },
      };
    case types.REMOVE_CACHE_BY_KEY:
      return {
        ...state,
        cache: { ...removeCacheByKey(state.cache, action.payload) },
      };
    case types.CLEAR_CACHE:
      return { ...state, cache: { ...initialState.cache } };
    default:
      return state;
  }
};

export type FiltersDataState = Readonly<typeof initialState>;
export default filtersDataReducer;
