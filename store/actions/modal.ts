import { ActionType, ActionCreatorType } from "../types";
import { equalKeyAndValue } from "./equalKeyAndValue";

export const types: ActionType = equalKeyAndValue([
  "MODAL_HIDE",
  "MODAL_SHOW",
] as Array<string>);

//action creators
export const hideModal = (): ActionCreatorType => ({
  type: types.MODAL_HIDE,
});

interface showModalPayload {
  modalType: string | null;
  modalProps: object;
}

export const showModal = (payload: showModalPayload): ActionCreatorType => ({
  type: types.MODAL_SHOW,
  payload,
});
