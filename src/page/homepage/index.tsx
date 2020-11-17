// @flow
import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getToken } from "../../api";
import { BookList } from "../../components/bookList";
import { Notification } from "../../components/notification";
import { RootState } from "../../store";
type Props = {};
export const HomePage = (props: Props) => {
  const history = useHistory();
  const state = useSelector((state: RootState) => state.books);
  const dispatch = useDispatch();
  return (
    <div>
      <Notification />
    </div>
  );
};
