import { types } from "../actions/notification";
import { ActionCreatorType } from "../types";

export type NotificationState = "success" | "danger" | "info" | "warning";

export type Toast = {
  id?: number;
  title?: string;
  description: string;
  state: NotificationState;
};

export type Position =
  | "top-right"
  | "bottom-right"
  | "top-left"
  | "bottom-left";

export type Notification = {
  position: Position;
  toastList: Toast[];
};

const initialState: Notification = {
  toastList: [],
  position: "bottom-left",
};

const notificationReducer = (
  state = initialState,
  action: ActionCreatorType
): Notification => {
  switch (action.type) {
    case types.ADD_NOTIFICATION:
      return {
        ...state,
        toastList: [
          { ...action.payload, id: Math.floor(Math.random() * 100 + 1) },
          ...state.toastList,
        ],
      };
    case types.REMOVE_NOTIFICATION:
      return {
        ...state,
        toastList: state.toastList.filter(({ id }) => id !== action.payload),
      };
    case types.CHANGE_POSITION:
      return {
        ...state,
        position: action.payload,
      };
    default:
      return state;
  }
};

export default notificationReducer;
