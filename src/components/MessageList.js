import { useState, useEffect } from 'react';
import MessageCard from './MessageCard';
import DUMMY_DATA from '../dummy_data/messages.json';

function MessageList() {
    const [ messages, setMessages ] = useState([]);

    useEffect(()=>{
        setMessages(DUMMY_DATA);
    }, []);

    return (
        <div className="message-list">
            <ul>
                { messages.map(message => (
                    <li><MessageCard key={ message.id } message={ message }/></li>
                )) }
            </ul>
        </div>
    )
}

export default MessageList
