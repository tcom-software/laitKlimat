import { Dispatch } from "redux";
import { ActionCreatorType } from "../types";
import { storage } from "constants/storageKeys";
import { getFiltersCache } from "@redux/selectors/filters";
import { setCookie } from "utils/cookies";

// action types
export const types = {
  ADD_FILTERS: "filters/ADD_FILTERS",
  DELETE_ONE_FILTER: "filters/DELETE_ONE_FILTER",
  DELETE_MANY_FILTERS: "filters/DELETE_MANY_FILTERS",
  DELETE_ALL_FILTERS: "filters/DELETE_ALL_FILTERS",
  CHANGE_CATEGORY: "filters/CHANGE_CATEGORY",
  ADD_NEW_CACHE: "filters/ADD_NEW_CACHE",
  REMOVE_CACHE_BY_KEY: "filters/REMOVE_CACHE_BY_KEY",
  CLEAR_CACHE: "filters/CLEAR_CACHE",
};

// action creators
export const addFilters = (filters: Object) => ({
  type: types.ADD_FILTERS,
  payload: filters,
});

export const changeCategory = (category: number) => ({
  type: types.CHANGE_CATEGORY,
  payload: category,
});

export const deleteAllFilters = () => {
  return (dispatch: Dispatch<ActionCreatorType>) => {
    dispatch({
      type: types.DELETE_ALL_FILTERS,
    });
  };
};

/// cahche

export const addFiltersCache = (key: any, value: any) => {
  return (dispatch: Dispatch<ActionCreatorType>, getState: any) => {
    dispatch({
      type: types.ADD_NEW_CACHE,
      payload: { key, value },
    });

    const cachOrdering = getFiltersCache(getState())._cacheOrdering;
    setCookie(storage.FILTERS, JSON.stringify(cachOrdering), 1);
  };
};

export const removeCacheByKey = (key: any) => ({
  type: types.REMOVE_CACHE_BY_KEY,
  payload: key,
});

export const clearCache = () => ({
  type: types.CLEAR_CACHE,
});
