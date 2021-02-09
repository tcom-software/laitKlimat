import { types } from "../actions/filters";
import { ActionCreatorType } from "../types";

export const serialezeKey = (key: any) => {
  if (typeof key === "string") {
    return key;
  }

  return Object.entries(key).reduce(
    (acc, entry) => `${acc}${entry.join(":")},`,
    ""
  );
};

const addToCache = (cache: any, payload: any) => {
  const serializedKey = serialezeKey(payload.key);
  cache._cache[serializedKey] = payload.value;
  cache._cacheOrdering.push(serializedKey);
  if (cache._cacheOrdering.length > cache._cacheSize) {
    const earliest = cache._cacheOrdering[0];
    removeCacheByKey(cache, earliest);
  }
  return cache;
};

const removeCacheByKey = (cache: any, key: any) => {
  const serializedKey = serialezeKey(key);
  const index = cache._cacheOrdering.indexOf(serializedKey);
  if (index > -1) {
    cache._cacheOrdering.splice(index, 1);
  }
  delete cache._cache[serializedKey];
  return cache;
};

const initialState = {
  cache: {
    _cache: {},
    _cacheSize: 6,
    _cacheOrdering: [],
  },
  filters: {},
};

const filterReducer = (
  state = initialState,
  action: ActionCreatorType
): FilterState => {
  switch (action.type) {
    case types.ADD_FILTERS:
      return {
        ...state,
        filters: { ...state.filters, ...action.payload },
      };
    case types.CHANGE_CATEGORY:
      return {
        ...state,
        filters: { ...state.filters, category: action.payload },
      };
    case types.DELETE_ALL_FILTERS:
      return { ...state, filters: {} };

    // cache by filters or categories
    case types.ADD_NEW_CACHE:
      return {
        ...state,
        cache: { ...addToCache(state.cache, action.payload) },
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

export type FilterState = Readonly<typeof initialState>;
export default filterReducer;
