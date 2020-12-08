import { ActionCreatorType } from "../types";

export const types = {
  INITIALIZE_CATEGORIES: "site/INITIALIZE_CATEGORIES",
};

//action creators
export const initializeCategories = (categories: any[]): ActionCreatorType => ({
  type: types.INITIALIZE_CATEGORIES,
  payload: categories,
});
