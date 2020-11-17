// @flow

import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { NotificationApi } from "../../api/auth/poster/notification/notification.api";
import { RootState } from "../../store";
import io from "socket.io-client";
import { Button } from "react-bootstrap";
const baseUrl = "http://localhost:3001";
type Props = {};
let ioCn = io.connect(baseUrl);

export const Notification = (props: Props) => {
  const state = useSelector((state: RootState) => state.notification);
  const history = useHistory();
  const dispatch = useDispatch();
  const [condition, setCondition] = useState({
    take: 10,
    skip: 0,
  });
  const getNotification = () => {
    NotificationApi.getAll(condition.skip, condition.take).then((result) => {
      if (result.data.status == 401) return history.push("/login");
      if (result.data.status == 200) {
        dispatch({
          type: "UPDATE_NOTIFICATION",
          payload: result.data.result,
        });
      }
    });
  };
  useEffect(() => {
    getNotification();
    ioCn.on("connection", () => {
      console.log("connect");
    });
    ioCn.on("newNotification", () => {
      console.log("new");
    });
  }, [true]);
  const sendSocket = () => {
    ioCn.emit("new");
  };
  return (
    <div>
      <div>
        <h1> new : {state.new}</h1>
      </div>
      <i className="fas fa-bell"></i>
      {console.log(state)}
      <Button
        onClick={() => {
          sendSocket();
        }}
      >
        ADD
      </Button>
    </div>
  );
};
