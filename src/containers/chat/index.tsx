import React from 'react';
import MessageList from "../../components/chat/messenger-list";
import ConversationList from "../../components/chat/conversation-list";
import './style.scss';
import Compose from "../../components/chat/compose";

export default function Messenger(props: any) {
    return (
        <div className="messenger">
            <div className="scrollable content">
                <MessageList/>
            </div>

            <div className="scrollable sidebar">
                <ConversationList/>
            </div>
            <Compose/>

        </div>
    );
}
