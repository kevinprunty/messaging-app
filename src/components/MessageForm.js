import { useState, useEffect } from 'react';

function MessageForm() {
    const [ title, setTitle ] = useState("Set a title");
    const [ body, setBody ] = useState("Set a body");


    const handleTitleChange = ( event ) => {
        setTitle(event.target.value);
    }

    const handleBodyChange = ( event ) => {
        setBody(event.target.value);
    }

    const handleSubmit = ( event ) => {
        const url = 'http://localhost:3001/api/messages';

        const newMessage = { title, body };
        
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(newMessage)
        }).then( response => {
            console.log(response.json);
        })

        event.preventDefault();
    }


    return (
        <form className="message-form" onSubmit = { handleSubmit }>
            <div className="post-title">
                <label htmlFor="title">Title:</label>
                <input value={title} name="title" id="title" onChange={handleTitleChange}/>
            </div>
            <div className="post-body">
                <label htmlFor="body">Message:</label>
                <textarea value={body} in="body" onChange={handleBodyChange}/>
            </div>
            <div className="submit-button">
                <button className="btn primary">Submit</button>
            </div>
        </form>
    )
}

export default MessageForm
