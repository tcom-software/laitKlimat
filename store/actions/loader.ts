import { ActionCreatorType } from "../types";

export const types = {
  TOGGLE_LOADER: "loader/TOGGLE_LOADER",
};

//action creators
export const toggleLoader = (isloading: boolean): ActionCreatorType => ({
  type: types.TOGGLE_LOADER,
  payload: isloading,
});
