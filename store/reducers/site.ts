import { types } from "@redux/actions/site";
import { ActionCreatorType } from "@redux/types";

export type SiteState = Readonly<typeof initialState>;

const initialState = {
  search: {
    text: "",
    categoryId: [],
  },
  categories: null,
  secondLevelCategories: null,
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
        categories: action.payload.categories,
        secondLevelCategories: action.payload.secondLevelCategories,
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
    case types.CHANGE_SEARCH_TEXT:
      return {
        ...state,
        search: {
          ...state.search,
          text: action.payload,
        },
      };
    case types.CHANGE_SEARCH_STATE:
      return {
        ...state,
        search: {
          ...state.search,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default siteReducer;
