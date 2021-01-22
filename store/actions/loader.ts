import { ActionCreatorType } from "../types";

export const types = {
  TOGGLE_LOADER: "loader/TOGGLE_LOADER",
  TOGGLE_CATEGORY_LOADER: "loader/TOGGLE_CATEGORY_LOADER",
};

//action creators
export const toggleLoader = (isloading: boolean): ActionCreatorType => ({
  type: types.TOGGLE_LOADER,
  payload: isloading,
});

export const toggleCategoryLoader = (isloading: boolean): ActionCreatorType => ({
  type: types.TOGGLE_CATEGORY_LOADER,
  payload: isloading,
});
