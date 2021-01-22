import { ActionCreatorType } from "../types";
import { Position, Toast } from "../reducers/notification";

export const types = {
  ADD_NOTIFICATION: "notification/ADD_NOTIFICATION",
  REMOVE_NOTIFICATION: "notification/REMOVE_NOTIFICATION",
  CHANGE_POSITION: "notification/CHANGE_POSITION",
};

//action creators
export const addNotification = (toast: Toast): ActionCreatorType => ({
  type: types.ADD_NOTIFICATION,
  payload: toast,
});

export const removeNotification = (id: number): ActionCreatorType => ({
  type: types.REMOVE_NOTIFICATION,
  payload: id,
});

export const changePositiopn = (position: Position): ActionCreatorType => ({
  type: types.CHANGE_POSITION,
  payload: position,
});
