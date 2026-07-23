import React, { useState } from "react";
import "./MiniChat.css";

export default function MiniChat() {

    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const handleSend = () => {

        if (message.trim() === "") return;

        setMessages([...messages, message]);

        setMessage("");
    };

    return (
        <div className="chat-container">

            <div className="chat-card">

                <h1> Mini Chat Application</h1>
                <p>Type a message and start chatting</p>

                <div className="input-section">

                    <input
                        type="text"
                        placeholder="Type your message here..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />

                    <button onClick={handleSend}>
                        Send Message 
                    </button>

                </div>

                <div className="message-section">
                    {messages.length === 0 ? (
                        <p className="empty-message">
                             No messages yet. Start the conversation!
                        </p>
                    ) : (
                        messages.map((msg, index) => (
                            <div className="message-box" key={index}>
                                <div className="sender">You</div>

                                <div className="message-text">
                                    {msg}
                                </div>
                            </div>
                        ))
                    )}
                </div>

            </div>

        </div>
    );
}