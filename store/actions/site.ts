import { ActionCreatorType } from "../types";

export const types = {
  SHOW_CHAT: "site/SHOW_CHAT",
  HIDE_CHAT: "site/HIDE_CHAT",
  CHANGE_SEARCH_TEXT: "site/CHANGE_SEARCH_TEXT",
  CHANGE_SEARCH_STATE: "site/CHANGE_SEARCH_STATE",
  INITIALIZE_CATEGORIES: "site/INITIALIZE_CATEGORIES",
};

//action creators
export const initializeCategories = (categories: any[]): ActionCreatorType => ({
  type: types.INITIALIZE_CATEGORIES,
  payload: categories,
});

export const showChat = (props?: any): ActionCreatorType => ({
  type: types.SHOW_CHAT,
  payload: props,
});

export const hideChat = (): ActionCreatorType => ({
  type: types.HIDE_CHAT,
});

export const changeSearchText = (searchText: string): ActionCreatorType => ({
  type: types.CHANGE_SEARCH_TEXT,
  payload: searchText,
});
export const changeSearchState = (state: any): ActionCreatorType => ({
  type: types.CHANGE_SEARCH_STATE,
  payload: state,
});
