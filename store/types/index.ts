import { FilterState } from "@redux/reducers/filters";
import { ModalState } from "@redux/reducers/modal";

interface actionTypes {
  [name: string]: string;
}

export type ActionCreatorType = {
  type: string;
  payload?: any;
};

// export type ActionCreatorType = Readonly<ActionInterface>;
export type ActionType = Readonly<actionTypes>;
export type AppState = {
  filters: FilterState;
  modal: ModalState;
  categories: any;
};
