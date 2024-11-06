import React from 'react';

export function Notification({ Username, Message, Time = 'Now' }) {
    return(
        <div className="Notification">
            <div className="username-time">
                <div className="username">@{Username}</div>
                <div className="time">{Time}</div>
            </div>

            <div className="message">{Message}</div>
        </div>
    )
}