import React, {useEffect, useState} from 'react';
import Compose from '../compose';
import Toolbar from '../toolbar';
import Message from '../messenger';
import moment from 'moment';

import './style.scss';

const MY_USER_ID = 'apple';

export interface SMS {

    id: number;
    author: string;
    message: string;
    timestamp: number;
}

export default function MessageList() {
    const [messages, setMessages] = useState([] as SMS[])

    useEffect(() => {
        getMessages();
    }, [])


    const getMessages = () => {
        const tempMessages = [
            {
                id: 1,
                author: 'apple',
                message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
                timestamp: new Date().getTime()
            },
            {
                id: 2,
                author: 'orange',
                message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
                timestamp: new Date().getTime()
            },
            {
                id: 3,
                author: 'orange',
                message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
                timestamp: new Date().getTime()
            },
            {
                id: 4,
                author: 'apple',
                message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
                timestamp: new Date().getTime()
            },
            {
                id: 5,
                author: 'apple',
                message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
                timestamp: new Date().getTime()
            },
            {
                id: 6,
                author: 'apple',
                message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
                timestamp: new Date().getTime()
            },
            {
                id: 7,
                author: 'orange',
                message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
                timestamp: new Date().getTime()
            },
            {
                id: 8,
                author: 'orange',
                message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
                timestamp: new Date().getTime()
            },
            {
                id: 9,
                author: 'apple',
                message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
                timestamp: new Date().getTime()
            },
            {
                id: 10,
                author: 'orange',
                message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
                timestamp: new Date().getTime()
            },
        ];
        setMessages([...messages, ...tempMessages as []])
    }

    const renderMessages = () => {
        let i = 0;
        let messageCount = messages.length;
        let tempMessages = [];

        while (i < messageCount) {
            let previous = messages[i - 1];
            let current = messages[i];
            let next = messages[i + 1];
            let isMine = current.author === MY_USER_ID;
            let currentMoment = moment(current.timestamp);
            let prevBySameAuthor = false;
            let nextBySameAuthor = false;
            let startsSequence = true;
            let endsSequence = true;
            let showTimestamp = true;

            if (previous) {
                let previousMoment = moment(previous.timestamp);
                let previousDuration = moment.duration(currentMoment.diff(previousMoment));
                prevBySameAuthor = previous.author === current.author;

                if (prevBySameAuthor && previousDuration.as('hours') < 1) {
                    startsSequence = false;
                }

                if (previousDuration.as('hours') < 1) {
                    showTimestamp = false;
                }
            }

            if (next) {
                let nextMoment = moment(next.timestamp as any);
                let nextDuration = moment.duration(nextMoment.diff(currentMoment));
                nextBySameAuthor = next.author === current.author;

                if (nextBySameAuthor && nextDuration.as('hours') < 1) {
                    endsSequence = false;
                }
            }

            tempMessages.push(
                <Message
                    key={i}
                    isMine={isMine}
                    startsSequence={startsSequence}
                    endsSequence={endsSequence}
                    showTimestamp={showTimestamp}
                    data={current}
                />
            );

            // Proceed to the next message.
            i += 1;
        }

        return tempMessages;
    }

    return (
        <div className="message-list">
            <Toolbar
                title="Conversation Title"

            />

            <div className="message-list-container">{renderMessages()}</div>

            {/*<Compose/>*/}
        </div>
    );
}
