import get from "lodash/get";
import { AppState } from "@redux/types";
import { createSelector } from "reselect";
import { getCurrentCategoryId } from "./filters";

export const getCategories = (state: AppState) =>
  get(state, ["site", "categories"]);

export const getCurrentCategoryTitle = createSelector(
  getCategories,
  getCurrentCategoryId,
  (categories: any[], currentCategoryId: string) => {
    for (const category of categories) {
      for (const subCategory of category.subCategories) {
        for (const { name, id } of subCategory.subCategories) {
          if (id === Number(currentCategoryId)) {
            return { category: category.name, subSubCategory: name };
          }
        }
      }
    }
  }
);


