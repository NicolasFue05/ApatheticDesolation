/* eslint-disable react/prop-types */
import { useState } from "react";
import { notification, floatingWindow } from "../../constants/CurrentConstants.jsx";
import { Notification } from '../../components/Notification/Notification.jsx';
import { Chat } from '../../components/Chat/Chat.jsx';
import { FloatingWindow } from '../../components/Window/FloatingWindow.jsx';

import './FirstScene.css';

function FirstScene({ onSceneChange }) {
    const [isHidden, setIsHidden] = useState(false); 
    const [showChat, setShowChat] = useState(false); 
    const [showNotification, setShowNotification] = useState(true);
    const [notificationIndex, setNotificationIndex] = useState(0); 
    const [glitchEffect, setGlitchEffect] = useState(false); 
    const [showFloatingWindow, setShowFloatingWindow] = useState(false); 

    const handleCloseChat = () => {
        setShowChat(false);
        setIsHidden(false);

        setTimeout(() => {
            if (notificationIndex === 0) {
                setNotificationIndex(1);
                setShowNotification(true);
                setGlitchEffect(true);
            } else {
                setShowFloatingWindow(true); 
                setGlitchEffect(false); 
            }
        }, 1000);
    };

    const handleShowChat = () => {
        setIsHidden(true);

        setTimeout(() => {
            setShowNotification(false);
            setShowChat(true);
        }, 1000);
    };

    const handleCloseFloatingWindow = () => {
        setShowFloatingWindow(false);
        onSceneChange(); 
    };

    return (
        <>
            <section className={`FirstScene ${glitchEffect ? 'glitch-effect' : ''}`}>
                {showNotification && !showChat && (
                    <Notification
                        className={`notification-1 ${isHidden ? 'hide' : ''}`}
                        Username={notification[notificationIndex].username}
                        Message={notification[notificationIndex].message}
                        onClick={handleShowChat}
                    />
                )}

                {showChat && (
                    <Chat
                        className="chat-1"
                        Username={notification[notificationIndex].username}
                        onClose={handleCloseChat}
                    />
                )}

                {showFloatingWindow && (
                    <FloatingWindow 
                        Title={floatingWindow[0].Title}
                        StartingPosition={floatingWindow[0].StartingPosition}
                        isErrorWindow={true}
                        Content={floatingWindow[0].TextContent}
                        Styles={floatingWindow[0].Styles}
                        handleCloseButton={handleCloseFloatingWindow}
                        TextSpeed={30}
                        TextStyles={floatingWindow[0].TextStyles}
                        Cursor={false}
                    />
                )}
            </section>
        </>
    );
}

export default FirstScene;
