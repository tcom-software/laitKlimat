import get from "lodash/get";
import { AppState } from "@redux/types";
import { createSelector } from "reselect";
import { Notification } from "@redux/reducers/notification";

export const getNotification = (state: AppState) =>
  get(state, ["notification"]);

export const getNotificationList = () =>
  createSelector(
    getNotification,
    (notification: Notification) => notification.toastList
  );

export const getNotificationPosition = () =>
  createSelector(
    getNotification,
    (notification: Notification) => notification.position
  );
