import { deserializeArray, plainToClass } from "class-transformer";
import { BookTitleDto } from "../../api/book/book/book.dto";
import { Action } from "../../dto/action/action.dto";
const initialState = {
  new: 0,
  list: [],
};
const NotificationReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "GET_ALL":
      return state;
    case "UPDATE_NOTIFICATION":
      let list = action.payload.notifications;

      let newState = { ...state, list: list, new: action.payload.count };
      console.log(action);

      return newState;
    default:
      return state;
  }
};
export default NotificationReducer;
