import React from 'react';
import './Notification.css'

export function Notification({ Username, Message, Time = 'Now', className, onClick }) {
    const displayUsername = Username === 'unregistered' ? Username : `@${Username}`; 

    return(
        <div className={`Notification ${className}`} onClick={onClick}>
            <div className="username-time">
                <div className="username">{displayUsername}</div>
                <div className="time">{Time}</div>
            </div>

            <div className="message">{Message}</div>
        </div>
    )
}