import { ActionCreatorType } from "../types";

export const types = {
  INITIALIZE_CATEGORIES: "site/INITIALIZE_CATEGORIES",
  SHOW_CHAT: "site/SHOW_CHAT",
  HIDE_CHAT: "site/HIDE_CHAT",
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
