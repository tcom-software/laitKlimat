// action types
export const types = {
  ADD_NEW_CACHE: "products/ADD_NEW_CACHE",
  REMOVE_CACHE_BY_KEY: "products/REMOVE_CACHE_BY_KEY",
  CLEAR_CACHE: "products/CLEAR_CACHE",
};

// action creators

/// cahche
export const addProductsCache = (key: any, value: any) => ({
  type: types.ADD_NEW_CACHE,
  payload: { key, value },
});

export const removeProductsCacheByKey = (key: any) => ({
  type: types.REMOVE_CACHE_BY_KEY,
  payload: key,
});

export const clearProductsCache = () => ({
  type: types.CLEAR_CACHE,
});
