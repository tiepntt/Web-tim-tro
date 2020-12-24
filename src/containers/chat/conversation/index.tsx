import React from "react";

import ConversationList from "../../../components/chat/conversation-list";
import "../style.scss";

export default function Conversation(props: any) {
  return (
    <div className="messenger">
      <div className="scrollable sidebar">
        <ConversationList />
      </div>
    </div>
  );
}
