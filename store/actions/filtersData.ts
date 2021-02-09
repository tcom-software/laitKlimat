// import { Dispatch } from "redux";
// import { ActionCreatorType } from "../types";
// import { storage } from "constants/storageKeys";
// import { getFiltersCache } from "@redux/selectors/filters";
// import { setCookie } from "utils/cookies";

// action types
export const types = {
  ADD_NEW_CACHE: "filtersData/ADD_NEW_CACHE",
  REMOVE_CACHE_BY_KEY: "filtersData/REMOVE_CACHE_BY_KEY",
  CLEAR_CACHE: "filtersData/CLEAR_CACHE",
};

// action creators

/// cache
export const addFiltersDataCache = (key: any, value: any) => ({
  type: types.ADD_NEW_CACHE,
  payload: { key, value },
});

export const removeCacheByKey = (key: any) => ({
  type: types.REMOVE_CACHE_BY_KEY,
  payload: key,
});

export const clearCache = () => ({
  type: types.CLEAR_CACHE,
});
