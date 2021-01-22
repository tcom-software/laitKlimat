import { storage } from "constants/storageKeys";
import { setCookie } from "utils/cookies";
import { types } from "../actions/previousViews";
import { ActionCreatorType } from "../types";

const addToCashe = (cache: any, payload: any) => {
  const id = String(payload.key);

  cache._cache[id] = payload.value;
  cache._cacheOrdering.push(id);
  setCookie(storage.PRODUCTS, JSON.stringify(cache._cacheOrdering), 1);

  if (cache._cacheOrdering.length > cache._cacheSize) {
    const earliest = cache._cacheOrdering[0];
    removeCacheByKey(cache, earliest);
  }
  return cache;
};

const removeCacheByKey = (cache: any, key: any) => {
  const id = String(key);
  const index = cache._cacheOrdering.indexOf(id);
  if (index > -1) {
    cache._cacheOrdering.splice(index, 1);
    setCookie(storage.PRODUCTS, JSON.stringify(cache._cacheOrdering), 1);
  }
  delete cache._cache[id];
  return cache;
};

const initialState = {
  cache: {
    _cache: {},
    _cacheSize: 100,
    _cacheOrdering: [],
  },
};

const productsReducer = (
  state = initialState,
  action: ActionCreatorType
): ProductsState => {
  switch (action.type) {
    // cache by product id
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

export type ProductsState = Readonly<typeof initialState>;
export default productsReducer;
