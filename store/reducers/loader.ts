import { types } from "@redux/actions/loader";
import { ActionCreatorType } from "@redux/types";

export type FilterState = Readonly<typeof initialState>;

const initialState = {
  isLoading: false,
  isLoadingCategory: false,
};

const loaderReducer = (state = initialState, action: ActionCreatorType) => {
  switch (action.type) {
    case types.TOGGLE_LOADER:
      return {
        ...state,
        isLoading: action.payload,
      };
    case types.TOGGLE_CATEGORY_LOADER:
      return {
        ...state,
        isLoadingCategory: action.payload,
      };
    default:
      return state;
  }
};

export default loaderReducer;
