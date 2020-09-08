import { types } from "../actions/modal";
import { ActionCreatorType } from "../types";

interface State {
  modalIsOpen: boolean;
  modalType: string | null;
  modalProps: object;
}

const initialState: Readonly<State> = {
  modalIsOpen: false,
  modalType: null,
  modalProps: {},
};

const modalReducer = (
  state = initialState,
  action: ActionCreatorType
): State => {
  switch (action.type) {
    case types.MODAL_SHOW:
      return {
        modalIsOpen: true,
        modalType: action.payload.modalType,
        modalProps: action.payload.modalProps,
      };
    case types.MODAL_HIDE:
      return initialState;
    default:
      return state;
  }
};

export default modalReducer;
