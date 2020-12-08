import { types } from "@redux/actions/site";
import { ActionCreatorType } from "@redux/types";

export type FilterState = Readonly<typeof initialState>;

const initialState = {
  categories: [],
};

const siteReducer = (state = initialState, action: ActionCreatorType) => {
  switch (action.type) {
    case types.INITIALIZE_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default siteReducer;
