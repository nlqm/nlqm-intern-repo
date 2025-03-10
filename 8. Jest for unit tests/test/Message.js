import React, { useState } from 'react';

const Message = () => {
    const [message, setMessage] = useState("Hello Mia!");

    return (
        <div>
            <h1>{message}</h1>
            <button onClick={() => setMessage("You clicked the button!")}>
                Click me!
            </button>
        </div>
    );
};

export default Message;