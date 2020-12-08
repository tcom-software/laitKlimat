import { types } from "@redux/actions/loader";
import { ActionCreatorType } from "@redux/types";

export type FilterState = Readonly<typeof initialState>;

const initialState = {
  isloading: false,
};

const loaderReducer = (state = initialState, action: ActionCreatorType) => {
  switch (action.type) {
    case types.TOGGLE_LOADER:
      return {
        ...state,
        isloading: action.payload,
      };
    default:
      return state;
  }
};

export default loaderReducer;
