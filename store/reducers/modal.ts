import { types } from "../actions/modal";
import { ActionCreatorType } from "../types";

export type ModalState = Readonly<typeof initialState>;

const initialState = {
  modalIsOpen: false,
  modalType: null,
  modalProps: {},
};

const modalReducer = (
  state = initialState,
  action: ActionCreatorType
): ModalState => {
  switch (action.type) {
    case types.MODAL_SHOW:
      return {
        ...state,
        modalIsOpen: true,
        modalType: action.payload.modalType,
        modalProps: action.payload.modalProps,
      };
    case types.MODAL_HIDE:
      return { ...initialState };
    default:
      return state;
  }
};

export default modalReducer;
