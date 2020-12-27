import { NotificationApi } from "../../../api/user/notification";
import { NotificationType } from "./action";

const initialState = {
  count: 0,
};
export const NotificationReducer = (
  state = initialState,
  action: { type: string; payload: {} }
) => {
  switch (action.type) {
    case NotificationType.NEW_NOTIFICATION:
      return action.payload;
    default:
      return {};
  }
};
