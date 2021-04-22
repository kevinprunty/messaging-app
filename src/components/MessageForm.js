import { useState, useEffect } from 'react';

function MessageForm() {
    const [ title, setTitle ] = useState("Set a title");
    const [ body, setBody ] = useState("Set a body");


    const handleTitleChange = ( event ) => {
        setTitle(event.target.value);
        console.log(event.target.value);
    }

    const handleBodyChange = ( event ) => {
        setBody(event.target.value);
        console.log(event.target.value);
    }

    const handleSubmit = ( event ) => {
        console.log("Form submitted");
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
        </form>
    )
}

export default MessageForm
