import { deserializeArray, plainToClass } from "class-transformer";
import { BookTitleDto } from "../../api/book/book/book.dto";
import { Action } from "../../dto/action/action.dto";
const initialState = {
  list: [],
  bookActive: null,
};
const BookReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "GET_ALL":
      return state;
    case "UPDATE_BOOK":
      let list = action.payload;
      let newState = { ...state, list: list };
      return newState;
    default:
      return state;
  }
};

export default BookReducer;
