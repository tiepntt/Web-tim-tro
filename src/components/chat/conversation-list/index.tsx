import React, {useState, useEffect} from 'react';
import ConversationListItem from '../conversation-list-item';
import Toolbar from '../toolbar';
import axios from 'axios';

import './style.scss';
import {useHistory} from "react-router-dom";

export interface Conversation {
    photo: string;
    name: string;
    text: string;
}
export default function ConversationList(props:any) {
    const [conversations, setConversations] = useState([] as Conversation[]);
    const history = useHistory()
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
    const redirect = () => {
        history.push('/profile/support/messenger/' + '12314')
    }
    return (
        <div className="conversation-list">
            <Toolbar
                title="Messenger"
            />
            {
                conversations.map(conversation =>
                    <div  onClick={redirect} >
                        <ConversationListItem
                            key={conversation.name}
                            data={conversation}
                        />
                    </div>
                )
            }
        </div>
    );
}
