import React from 'react';
import './Notification.css'

export function Notification({ Username, Message, Time = 'Now', className }) {
    return(
        <div className={`Notification ${className}`}>
            <div className="username-time">
                <div className="username">@{Username}</div>
                <div className="time">{Time}</div>
            </div>

            <div className="message">{Message}</div>
        </div>
    )
}