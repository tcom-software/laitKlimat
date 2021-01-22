import { FilterState } from "@redux/reducers/filters";
import { ModalState } from "@redux/reducers/modal";
import { Notification } from "@redux/reducers/notification";
import { SiteState } from "@redux/reducers/site";

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
  notification: Notification;
  categories: any;
  site: SiteState,
};
