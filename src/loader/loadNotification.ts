import { Store } from "redux";
import { NotificationApi } from "../api/user/notification";
import { NotificationAction } from "../service/store/notification/action";
import { RootState } from "../store";

export const loadNotificationNews = async (store: Store) => {
  let state = store.getState() as RootState;
  let user = state.UserReducer;
  if (user && user.account?.id) {
    NotificationApi.getNews().then((res) => {
      if (res.data.status === 200) {
        store.dispatch(
          NotificationAction.loadNews(res.data.result.count as number)
        );
      }
    });
  }
};
