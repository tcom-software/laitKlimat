import get from "lodash/get";
import { AppState } from "@redux/types";
import { createSelector } from "reselect";
import { getCurrentCategoryId } from "./filters";

export const getCategories = (state: AppState) =>
  get(state, ["site", "categories"]);

export const getSecondLevelCategories = (state: AppState) =>
  get(state, ["site", "secondLevelCategories"]);

export const getCurrentCategoryTitle = createSelector(
  getCategories,
  getCurrentCategoryId,
  (categories: any[] | null, currentCategoryId: string) => {
    if (categories) {
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
  }
);

export const getChat = (state: AppState) => get(state, ["site", "chat"]);
export const getSearchState = (state: AppState) =>
  get(state, ["site", "search"]);

export const getSearchText = createSelector(
  getSearchState,
  state => state.text
);

export const getChatOpen = createSelector(getChat, chat => chat.isOpen);
export const getChatProps = createSelector(getChat, chat => chat.props);
