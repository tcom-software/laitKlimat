import { types } from "@redux/actions/site";
import { ActionCreatorType } from "@redux/types";

export type SiteState = Readonly<typeof initialState>;

const initialState = {
  categories: null,
  chat: {
    isOpen: false,
    props: {},
  },
};

const siteReducer = (state = initialState, action: ActionCreatorType) => {
  switch (action.type) {
    case types.INITIALIZE_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case types.SHOW_CHAT:
      return {
        ...state,
        chat: {
          ...state.chat,
          isOpen: true,
          props: action.payload,
        },
      };
    case types.HIDE_CHAT:
      return {
        ...state,
        chat: {
          ...state.chat,
          isOpen: false,
        },
      };
    default:
      return state;
  }
};

export default siteReducer;
