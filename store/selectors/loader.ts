import get from "lodash/get";
import { AppState } from "@redux/types";

export const getLoader = (state: AppState) =>
  get(state, ["loader", "isloading"]);

export const getCategoryLoader = (state: AppState) =>
  get(state, ["loader", "isLoadingCategory"]);
