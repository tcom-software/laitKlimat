import { ActionType, ActionCreatorType } from "../types";
import { exactlyKeyAndValue } from "./exactlyKeyAndValue";

export const types: ActionType = exactlyKeyAndValue([
  "MODAL_HIDE",
  "MODAL_SHOW",
] as Array<string>);

//action creators
export const hideModal = (): ActionCreatorType => ({
  type: types.MODAL_HIDE,
});

export const showModal = (payload: any): ActionCreatorType => ({
  type: types.MODAL_SHOW,
  payload,
});
