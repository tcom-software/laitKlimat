import { ActionCreatorType } from "../types";

export const types = {
  MODAL_HIDE: "modal/MODAL_HIDE",
  MODAL_SHOW: "modal/MODAL_SHOW",
};

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
