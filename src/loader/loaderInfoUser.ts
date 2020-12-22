import { Store } from "redux";
import { UserApi } from "../api/user/user";
import { ActionUserDispatch } from "../service/store/userStore/action";

export const loadInfoUser = async (store: Store, userId: number) => {
  if (userId != 0) {
    UserApi.getAccount(userId).then((res) => {
      if (res.data.status === 200) {
        store.dispatch(ActionUserDispatch({ account: res.data.result }));
      }
    });
  }
};
