// action types
export const types = {
  ADD_NEW_CACHE: "previousViews/ADD_NEW_CACHE",
  REMOVE_CACHE_BY_KEY: "previousViews/REMOVE_CACHE_BY_KEY",
  CLEAR_CACHE: "previousViews/CLEAR_CACHE",
};

// action creators
/// cahche

export const addPreviousViews = (key: any, value: any) => ({
  type: types.ADD_NEW_CACHE,
  payload: { key, value },
});

export const removePreviousViewsByKey = (key: any) => ({
  type: types.REMOVE_CACHE_BY_KEY,
  payload: key,
});

export const clearPreviousViews = () => ({
  type: types.CLEAR_CACHE,
});
