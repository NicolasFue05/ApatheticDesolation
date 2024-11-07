import React, { useState } from 'react';
import XIcon from '../../assets/X.svg';
import SendIcon from '../../assets/send.svg';
import { chatsMessages } from '../../Constants/CurrentConstants';
import './Chat.css';

export function Chat({ Username, onClose }) {
    const displayUsername = Username === 'unregistered' ? Username : `@${Username}`;
    const isDefaultUser = Username === chatsMessages[0].username;

    const [inputValue, setInputValue] = useState(isDefaultUser ? "Yes, I'll be there" : '');
    const [userMessages, setUserMessages] = useState([]);
    const [isVisible, setIsVisible] = useState(true);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSendMessage = () => {
        if (inputValue.trim()) {
            const newMessage = {
                key: Date.now(),
                message: inputValue,
                isReceived: false,
                time: '5:00 p.m.',
            };
            setUserMessages((prevMessages) => [...prevMessages, newMessage]);
            setInputValue('');
        }
    };

    const handleCloseChat = () => {
        setIsVisible(false); // Cambiar el estado de visibilidad para activar la animación
        onClose(); // Llamar a la función de cierre del chat
    };

    let userMessagesList = [];
    switch (Username) {
        case chatsMessages[0].username:
            userMessagesList = chatsMessages[0].messages;
            break;
        case chatsMessages[1].username:
            userMessagesList = chatsMessages[1].messages;
            break;
        default:
            userMessagesList = [];
            break;
    }

    return (
        isVisible && (
            <div className="Chat fade-out">
                <div className="username-closebtn">
                    <div className="username">{displayUsername}</div>
                    <button className="closebtn" onClick={handleCloseChat}>
                        <img src={XIcon} alt="Close button" />
                    </button>
                </div>

                <div className="chat-messages">
                    {userMessagesList.length > 0 || userMessages.length > 0 ? (
                        [...userMessagesList, ...userMessages].map((message) => (
                            <MessageBubble
                                key={message.key}
                                message={message.message}
                                isReceived={message.isReceived}
                                time={message.time}
                            />
                        ))
                    ) : (
                        <p>No messages available</p>
                    )}
                </div>

                <div className="input-sendbtn">
                    <input 
                        type="text" 
                        className="input-chat"
                        readOnly={isDefaultUser}
                        value={inputValue}
                        onChange={handleInputChange} 
                        placeholder="Type a message..." 
                    />
                    <button className="sendbtn" onClick={handleSendMessage}>
                        <img src={SendIcon} alt="Send Icon" />
                    </button>
                </div>
            </div>
        )
    );
}

function MessageBubble({ message, isReceived, time }) {
    return isReceived ? (
        <div className="received-message">
            <div className="message-text">{message}</div>
            <div className="received-message-time">{time}</div>
        </div>
    ) : (
        <div className="sent-message">
            <div className="message-text">{message}</div>
            <div className="sent-message-time">{time}</div>
        </div>
    );
}

export function ChatContainer() {
    const [notifications, setNotifications] = useState([{ id: 0, message: "Notification 0" }]);
    const [isChatVisible, setIsChatVisible] = useState(true);

    const handleCloseChat = () => {
        setIsChatVisible(false);

        // Añadir una nueva notificación cuando se cierra el chat
        setNotifications((prev) => [
            ...prev,
            { id: 1, message: "Notification 1" } // Nueva notificación
        ]);
    };

    return (
        <div className="ChatContainer">
            {notifications.map((notification) => (
                <div key={notification.id} className="notification">
                    {notification.message}
                </div>
            ))}

            {isChatVisible && (
                <Chat Username="user1" onClose={handleCloseChat} />
            )}
        </div>
    );
}
