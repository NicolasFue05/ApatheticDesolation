import React, { useState } from "react";
import { notification } from "../../Constants/CurrentConstants.jsx";
import { Notification } from '../../components/Notification/Notification.jsx';
import { Chat } from '../../components/Chat/Chat.jsx';
// import { FloatingWindow } from "../../components/Window/FloatingWindow.jsx";

import './FirstScene.css';

function FirstScene() {
    const [isHidden, setIsHidden] = useState(false); // Controla la animación de ocultado
    const [showChat, setShowChat] = useState(false); // Controla si el chat se muestra
    const [showNotification, setShowNotification] = useState(true); // Controla si la notificación está visible
    const [notificationIndex, setNotificationIndex] = useState(0); // Controla qué notificación se está mostrando

    const handleCloseChat = () => {
        setShowChat(false); // Ocultar el chat cuando se cierra
        setIsHidden(false); // Resetea la animación de la notificación
        setTimeout(() => {
            setNotificationIndex(1); // Cambia al índice de la segunda notificación
            setShowNotification(true); // Muestra la segunda notificación
        }, 1000); // Espera 1 segundo después de cerrar el chat
    };

    const handleShowChat = () => {
        setIsHidden(true); // Inicia la animación para ocultar la notificación

        // Espera el tiempo de la animación antes de cambiar a mostrar el chat
        setTimeout(() => {
            setShowNotification(false); // Ocultar la notificación
            setShowChat(true); // Mostrar el chat
        }, 1000); // Duración de la animación de la notificación (1 segundo)
    };

    // Recreation Floating Window
    // const floatingWindows = [
    //     {
    //         WindowTitle: "extec.exe",
    //         Width: 150,
    //         StartingPosition: { x: 500, y: 150 }
    //     }
    // ]


    return (
        <>
            <section className="FirstScene">
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
                        onClose={handleCloseChat} // Pasamos la función para cerrar el chat
                    />
                )}

                {/* <FloatingWindow 
                    WindowTitle={floatingWindows[0].WindowTitle}
                    StartingPosition={floatingWindows[0].StartingPosition}
                /> */}

            </section>
        </>
    );
}

export default FirstScene;
