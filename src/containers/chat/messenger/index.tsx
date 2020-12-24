import React from "react";
import MessageList from "../../../components/chat/messenger-list";

import "../style.scss";
import Compose from "../../../components/chat/compose";

export default function Messenger(props: any) {
  return (
    <div className="messenger">
      <div className="scrollable content">
        <MessageList />
      </div>
      <Compose />
    </div>
  );
}
