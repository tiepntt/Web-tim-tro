import React from 'react';
import MessageList from "../../../components/chat/messenger-list";
import ConversationList from "../../../components/chat/conversation-list";
import '../style.scss';

export default function Conversation(props: any) {
    return (
        <div className="messenger">
            <div className="scrollable sidebar">
                <ConversationList/>
            </div>
        </div>
    );
}
