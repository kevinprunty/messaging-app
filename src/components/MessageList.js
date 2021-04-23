import { useState, useEffect } from 'react';
import MessageCard from './MessageCard';

function MessageList() {
    const [ messages, setMessages ] = useState([]);

    useEffect(()=>{
        const url = 'http://localhost:3001/api/messages';
        fetch(url).then(
            response => {
                return response.json();
            }
        ).then(json => { 
            setMessages(json);
        })
        .catch( error => {
            console.log(error.message);
        })

        
    }, []);

    return (
        <div className="message-list">
            <ul>
                { messages.map ? messages.map(message => (
                    <li><MessageCard key={ message.id } message={ message }/></li>
                )) : null }
            </ul>
        </div>
    )
}

export default MessageList
