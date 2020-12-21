import React, {useState, useEffect} from 'react';
import ConversationListItem from '../conversation-list-item';
import Toolbar from '../toolbar';
import axios from 'axios';

import './style.scss';

export interface Conversation {
    photo: string;
    name: string;
    text: string;
}
export default function ConversationList(props:any) {
    const [conversations, setConversations] = useState([] as Conversation[]);
    useEffect(() => {
        getConversations()
    },[])
    const getConversations = () => {
        axios.get('https://randomuser.me/api/?results=20').then(response => {
            let newConversations = response.data.results.map((result:any) => {
                return {
                    photo: result.picture.large,
                    name: `${result.name.first} ${result.name.last}`,
                    text: 'Hello world! This is a long message that needs to be truncated.'
                };
            });
            setConversations([...conversations, ...newConversations])
        });
    }

    return (
        <div className="conversation-list">
            <Toolbar
                title="Messenger"
            />
            {
                conversations.map(conversation =>
                    <a href="/profile/support/messenger" >
                        <ConversationListItem
                            key={conversation.name}
                            data={conversation}
                        />
                    </a>
                )
            }
        </div>
    );
}
